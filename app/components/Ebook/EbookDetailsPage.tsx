"use client"
import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./EbookDetails";
import {
  useCreatePaymentIntentMutation,
  useGetStripePublishablekeyQuery,
} from "@/redux/features/orders/ordersApi";
import { loadStripe } from "@stripe/stripe-js";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useGetEbookDetailQuery } from "@/redux/features/ebooks/ebookApi";
import SimpleBackdrop from "../Loading/SimpleBackdrop";

type Props = {
  id: string;
};

const fakeDetail = {
  "success": true,
  "ebook":  {
    "name": "เทคนิคเทรดข่าว forex ครบทุกประเภท",
    "description": "เจ้าเห็ดน้อย คือผลงานจากนักเขียนที่ได้รับรางวัลจากสมาคมวรรณกรรมไซไฟจีน (Silver Award of 2021 Chinese Science Fiction Nebula Awards) เรื่องราวของเจ้าเห็ดน้อยนี้จะพาทุกคนอึ้งและลุ้นไปพร้อมกับสิ่งมหัศจรรย์มากมาย พร้อมเสิร์ฟความแฟนตาซีล้ำยุคถึงมือคุณแล้ววันนี้ “อย่าไปเลย…เจ้าเห็ดน้อย” คำเว้าวอนของอานเจ๋อ มนุษย์เพียงคนเดียวที่เจ้าเห็ดน้อย ‘อันเจ๋อ’ รู้จัก ดังขึ้นก่อนที่อีกฝ่ายจะจากโลกนี้ไปอย่างสงบ",
    "price": 10,
    "estimatedPrice": 15900,
    "totalPage": 10,
    "fileType": "PDF",
    "totalSizeMB": 227,
    "thumbnail": {
        "public_id": "courses/eta6o7otuh54o8qfc5ie",
        "url": "https://res.cloudinary.com/doqbge8fv/image/upload/v1697210521/courses/eta6o7otuh54o8qfc5ie.png"
    },
    "purchased": 0,
    "_id": "6543e9df3fbf3175b98b9a0b",
    "createdAt": "2023-11-02T18:26:39.549Z",
    "updatedAt": "2023-11-02T18:26:39.549Z",
    "__v": 0
}
}

const EbookDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetEbookDetailQuery(id);
  const { data: config } = useGetStripePublishablekeyQuery({});
  const [createPaymentIntent, { data: paymentIntentData }] = useCreatePaymentIntentMutation();
  const { data: userData } = useLoadUserQuery(undefined, {});
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (config) {
      const publishablekey = config?.publishablekey;
      setStripePromise(loadStripe(publishablekey));
    }
    if (data && userData?.user) {
      // const amount = Math.round(data.course.price * 100);
      const amount = Math.round(data.ebook.price * 100);
      createPaymentIntent(amount);
    }
  }, [config, data, userData]);

  useEffect(() => {
    if (paymentIntentData) {
      setClientSecret(paymentIntentData?.client_secret);
    }
  }, [paymentIntentData]);

  return (
    <>
      <div>
        <Heading
          title={'data.course.name' + " - ELearning"}
          description={
            "ELearning is a programming community which is developed by shahriar sajeeb for helping programmers"
          }
          keywords={'data?.course?.tags'}
        />
        <Header
          route={route}
          setRoute={setRoute}
          open={open}
          setOpen={setOpen}
          activeItem={2}
        />
        <CourseDetails
          data={data?.ebook || {}}
          stripePromise={stripePromise}
          clientSecret={clientSecret}
          setRoute={setRoute}
          setOpen={setOpen}
        />
        <Footer />
        
      </div>
    </>
  );
};

export default EbookDetailsPage;
