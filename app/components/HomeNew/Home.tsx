"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../utils/Heading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from 'aos';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';

import Hero from "./Hero";
import TopCategory from "./TopCategory";
import PeopleReview from "./PeopleReview";
import WhyLearnCourse from "./WhyLearnCourse";
import Courses from "./Course";
import TrustBy from "./TrustBy";
import Ebooks from "./Ebooks";


function Home({ webInfo }: any) {
    console.log("🚀 ~ file: Home.tsx:24 ~ Home ~ layout:", webInfo)
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    useEffect(() => {
        window.localStorage.setItem('theme', 'light')
        AOS.init({
            once: true,
            delay: 300
        });
    }, [])


    return (
        <div>

         

            <Header
                open={open}
                setOpen={setOpen}
                activeItem={0}
                setRoute={setRoute}
                route={route}
            />
            <Hero
                banner={webInfo?.banner || {}}
                setOpen={setOpen}
            />
            <TopCategory
                categoty={webInfo.category}
            />
            <PeopleReview />
            <Courses />
            <Ebooks/>
            <WhyLearnCourse />
            <TrustBy />
            <Footer />
        </div>
    );
};

export default Home