"use client"
import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
// import CourseContentMedia from "./CourseContentMedia";
import Header from "../Header";
import { useGetBlogContentQuery } from "@/redux/features/blog/blogsApi";
import Footer from "../Footer";
// import CourseContentList from "./CourseContentList";

type Props = {
    slug: string;
    blog: any
};

const BlogContent = ({ slug, blog }: Props) => {
    const [open, setOpen] = useState(false);
    const [route, setRoute] = useState('Login')
    const data = blog

    const [activeVideo, setActiveVideo] = useState(0);

    return (
            <>
                <Header activeItem={3} open={open} setOpen={setOpen} route={route} setRoute={setRoute} />
                <div className="w-full grid 800px:grid-cols-10">
                    <Heading
                        title={data?.title}
                        description={data?.description}
                        keywords={data?.keyword}
                    />
                </div>
                <div className="w-full pb-[8rem]">
                    <div className="max-w-[700px] mx-auto">
                        <h1 className="text-[32px] pt-10 font-bold text-black">{data?.title}</h1>
                        {/* <h1 className="text-[28px]">{data?.description}</h1> */}
                        <p style={{color: 'black'}} dangerouslySetInnerHTML={{ __html: data.content }}></p>
                    </div>
                </div>
                <Footer />
            </>
    );
};

export default BlogContent;
