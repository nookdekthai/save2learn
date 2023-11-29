import dynamic from "next/dynamic";
import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";
import { format } from "timeago.js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../Payment/CheckOutForm";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BsBook, BsFileEarmarkMinus, BsFilePdf } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { saveAs } from "file-saver";
import { Box, Modal } from "@mui/material";
import SimpleBackdrop from "../Loading/SimpleBackdrop";
import { AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";


type Props = {
  data: any;
  stripePromise: any;
  clientSecret: string;
  setRoute: any;
  setOpen: any;
};

const EbookDetails = ({
  data: ebookInfo,
  stripePromise,
  clientSecret,
  setRoute,
  setOpen: openAuthModal,
}: Props) => {

  const { data: userData, refetch } = useLoadUserQuery(undefined, {});
  const router = useRouter()
  const [user, setUser] = useState<any>();
  const [open, setOpen] = useState(false);
  const [isLoadingBackDrop, setLoadingBackDrop] = useState(false);
  const [openModalDownLoad, setOpenModalDownLoad] = useState(false);

  useEffect(() => {
    setUser(userData?.user);
  }, [userData]);

  const dicountPercentenge =
    ((ebookInfo?.estimatedPrice - ebookInfo.price) / ebookInfo?.estimatedPrice) * 100;

  const discountPercentengePrice = dicountPercentenge.toFixed(0);

  const isPurchased =
    user && user?.ebooks?.find((item: any) => item._id === ebookInfo._id);

  const handleOrder = (e: any) => {
    if (user) {
      setOpen(true);
    } else {
      setRoute("Login");
      openAuthModal(true);
    }
  };

  const saveFile = () => {
    saveAs(
      `${process.env.NEXT_PUBLIC_ORIGIN_URI}/api/v1/get-ebook/${ebookInfo._id}/download`,
      `${ebookInfo.name}.pdf`
    )
  };

  const handleClickView = () => {
    router.push(`/view-pdf/${ebookInfo._id}`)
  }

  return (
    <div>
      <div className="w-[90%] 800px:w-[90%] m-auto py-5">
        <div className="w-full flex flex-col-reverse 800px:flex-row">
          <div className="w-full 800px:w-[65%] 800px:pr-5 relative">
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              {ebookInfo?.name}
            </h1>
            <div className="dark:text-white mt-10 w-[90%]">
              &nbsp;{ebookInfo?.description}

            </div>

            <div className=" overflow-x-auto mt-10 bottom-0 w-[90%]">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      จำนวนหน้า
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ขนาดไฟล์
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ประเภทไฟล์
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center flex-col gap-3">
                        <BsBook className="text-xl" />
                        <p>{ebookInfo?.totalPage} หน้า</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center flex-col gap-3">
                        <BsFileEarmarkMinus className="text-xl" />
                        <p> {ebookInfo?.totalSizeMB} MB</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center flex-col gap-3">
                        <BsFilePdf className="text-xl" />
                        <p> {ebookInfo?.fileType || 'PDF'}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full 800px:w-[35%] relative">
            <div className="sticky top-[100px] left-0 z-50 w-full">
              {
               !!ebookInfo?.thumbnail?.url && <Image
                  src={ebookInfo?.thumbnail?.url}
                  width={400}
                  height={350}
                  alt=""

                />
              }
              <div className="flex items-center">
                <h1 className="pt-5 text-[25px] text-black dark:text-white">
                  {ebookInfo?.price === 0 ? "Free" : ebookInfo?.price + "฿"}
                </h1>
                <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black dark:text-white">
                  {ebookInfo?.estimatedPrice}฿
                </h5>

                <h4 className="pl-5 pt-4 text-[22px] text-black dark:text-white">
                  {discountPercentengePrice}% Off
                </h4>
              </div>
              <div className="flex items-center gap-1 w-[80%]">
                {isPurchased ? (
                  <div className="flex gap-2 w-[80%]">
                    <button
                    onClick={handleClickView}
                    className={`${styles.button} w-[80%] my-3 font-Poppins cursor-pointer bg-[#47d097] hover:bg-[#37a074]`}
                  >
                    <AiFillEye style={{ fontSize: 20 }} />&nbsp;
                    View
                  </button>
                    {/* <button
                    onClick={saveFile}
                    className={`${styles.button} !w-[190px] my-3 font-Poppins cursor-pointer bg-[#47d097] hover:bg-[#37a074]`}
                  >
                    <HiOutlineDownload style={{ fontSize: 20 }} />&nbsp;
                    Download Now
                  </button> */}
                  </div>
                
                ) : (
                  <div
                    className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    onClick={handleOrder}
                  >
                    Buy Now {ebookInfo?.price}฿
                  </div>
                )}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <>
        {open && (
          <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
            <div className="w-[500px] min-h-[500px] bg-white rounded-xl shadow p-3">
              <div className="w-full flex justify-end">
                <IoCloseOutline
                  size={40}
                  className="text-black cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="w-full">
                {stripePromise && clientSecret && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckOutForm setLoadingBackDrop={setLoadingBackDrop} setOpenModalDownLoad={setOpenModalDownLoad} setOpen={setOpen} data={ebookInfo} user={user} refetch={refetch} payForm="ebook" />
                  </Elements>
                )}
              </div>
            </div>
          </div>
        )}
      </>
      <>
        {openModalDownLoad && (
          <Modal
            open={openModalDownLoad}
            onClose={() => setOpenModalDownLoad(false)}
            aria-labelledby="modal-modal-title2"
            aria-describedby="modal-modal-description2"
          >
            <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
              <h1 className={`${styles.title}`}>
                EBook Already Download!
              </h1>
              <div className="flex w-full items-center justify-center mb-6 mt-4 text-center">
                <button
                  onClick={saveFile}
                  className={`${styles.button} !w-[190px] my-3 font-Poppins cursor-pointer bg-[#47d097]`}
                >
                  <HiOutlineDownload style={{ fontSize: 20 }} />&nbsp;
                  Download Now
                </button>

              </div>
            </Box>
          </Modal>
        )}
      </>
      <SimpleBackdrop open={isLoadingBackDrop} setOpen={setLoadingBackDrop} />
    </div>
  );
};

export default EbookDetails;


// 184.22.159.119/32 		
//  Active
//  EDIT  DELETE
// 0.0.0.0/1 		
//  Active
//  EDIT  DELETE
// 223.24.166.80/32  (includes your current IP address)		
//  Active
//  EDIT  DELETE
// 223.24.162.24/32 		
//  Active
//  EDIT  DELETE
// 184.22.158.104/32 