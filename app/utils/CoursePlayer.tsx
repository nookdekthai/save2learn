import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  const [isYoutubeVideo, setIsYoutubeVideo] = useState<boolean | null>(false);
  const [isStreamableVideo, setStreamableVideo] = useState<boolean | null>(
    false
  );
  const [linkYT, setLinkYT] = useState("");

  useEffect(() => {
    if (videoUrl?.includes("youtube.com")) {
      setIsYoutubeVideo(true);
      setLinkYT(videoUrl?.replace("watch?v=", "embed/"));
    } else if (videoUrl?.includes("streamable.com")) {
      setStreamableVideo(true);
      setLinkYT(videoUrl?.replace(".com/", ".com/e/"));
    } else {
      axios
        .post(`${process.env.NEXT_PUBLIC_ORIGIN_URI}/api/v1/getVdoCipherOTP`, {
          videoId: videoUrl,
        })
        .then((res) => {
          setVideoData(res.data);
        });
    }
  }, [videoUrl]);

  const isVideoOrStreamable = isYoutubeVideo || isStreamableVideo;

  return (
    <div
      style={{
        position: "relative",
        paddingTop: `${isVideoOrStreamable ? 0 : "56.25%"}`,
        overflow: "hidden",
      }}
    >
      <>
        {isYoutubeVideo ? (
          <RenderYoutubeVideo linkYT={linkYT} />
        ) : (
          <>
            {isStreamableVideo ? (
              <RenderStreamableVideo linkYT={linkYT} />
            ) : (
              <>
                {videoData.otp && videoData.playbackInfo !== "" && (
                  <iframe
                    src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=lMNsp7txi0py1L59`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    allowFullScreen={true}
                    allow="encrypted-media"
                  ></iframe>
                )}
              </>
            )}
          </>
        )}
      </>
    </div>
  );
};

const RenderYoutubeVideo = ({ linkYT }: any) => {
  return (
    <div className="videoWrapper">
      <iframe
        width={560}
        height={315}
        src={linkYT}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

const RenderStreamableVideo = ({ linkYT }: any) => {
  return (
    <div className="videoWrapper">
      <div
        style={{
          width: "100%",
          height: 0,
          position: "relative",
          paddingBottom: "62.500%",
        }}
      >
        <iframe
          src={linkYT}
          frameBorder={0}
          width="100%"
          height="100%"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default CoursePlayer;
