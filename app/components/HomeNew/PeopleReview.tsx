import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

const reviews = [
    {
        name: " มาลัย ธนานันท์",
        // avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "ธุรกิจส่วนตัว",
        comment:
            " หลังจากได้เรียนจากหลักสูตรออนไลน์กับอาจารย์อิสเรศแล้ว ดิฉันรู้สึกมั่นใจมากขึ้นในการนําความรู้ไปประยุกต์ใช้กับธุรกิจส่วนตัว "
    },
    {
        name: "ธีรวัฒน์ พึ่งโพธิ์",
        // avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        profession: "วิศวกร",
        comment:
            "ผมถูกใจวิธีการสอนของอาจารย์อิสเรศมาก เข้าใจง่าย ได้เนื้อหาครบถ้วนในเรื่องของฮวงจุ้ย ทําให้ชีวิตดีขึ้นเยอะ"
    },
    {
        name: "จิราภรณ์ โสพรรณ",
        // avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        profession: "พนักงานออฟฟิศ   ",
        comment:
            "หลังจากปรึกษาอาจารย์ ทําให้มองเห็นแนวทางในการแก้ปัญหาชีวิต และการทํางานได้ชัดเจนยิ่งขึ้น ขอบคุณมากค่ะ"
    },
    {
        name: "มาโนช วีระพงษ์",
        // avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        profession: "เจ้าของธุรกิจ",
        comment:
            "หลังจากที่ได้คําแนะนําจากอาจารย์  ทําให้ตัดสินใจลาออกจากงานเก่า แล้วมาเปิดกิจการเอง บอกเลยว่าชีวิตดีขึ้นเยอะแยะเลย",
    },
    {
        name: "ภคพร จันทรา",
        // avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        profession: "ธุรกิจส่วนตัว",
        comment:
            "ได้ลองนําความรู้ที่ได้จากการเรียนออนไลน์ไปใช้จริง ปรากฏว่าช่วยให้ธุรกิจดีขึ้นอย่างเห็นได้ชัด ขอบคุณอาจารย์มากค่ะ",
    },
    {
        name: "ธนา ทองพูน",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "พนักงานบริษัท ",
        comment:
            "หลังจากที่ได้พูดคุยกับอาจารย์ มุมมองในการมองปัญหาต่างๆ ก็เปลี่ยนไป ทําให้จิตใจสงบและมีความหวังมากขึ้น",
    },
    {
        name: "ณัฐวุฒิ สุทธิปรีชา",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "นักศึกษา ",
        comment:
            "ผมแอบอคติคิดว่าโหราศาสตร์คงไม่ใช่วิทยาศาสตร์ แต่หลังฟังการบรรยายของอาจารย์แล้ว ทําให้เปลี่ยนความคิด มองเห็นคุณค่ามากขึ้น",
    },
    {
        name: "พชรพรรณ เอี่ยมสะอาด",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "แม่บ้าน ",
        comment:
            "หลังจากที่ได้รับคําแนะนําจากอาจารย์ในเรื่องของการตกแต่งบ้าน ทําให้บ้านน่าอยู่ และครอบครัวอบอุ่นมากขึ้น",
    },
    {
        name: "ขวัญฤดี โพธาราม",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "พนักงานบริษัท ",
        comment:
            "อาจารย์อธิบายเรื่องฮวงจุ้ยได้ชัดเจนมาก เข้าใจง่ายดี ไม่ซับซ้อนเหมือนที่อื่นๆ ชอบมากค่ะ ถ้ามีโอกาสจะกลับมาเรียนอีกแน่นอน",
    },
    {
        name: "พีรวิชญ์ เดชะคําภู",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "ธุรกิจออนไลน์   ",
        comment:
            "หลังจากที่ได้รับคําปรึกษาทําให้กล้าที่จะตัดสินใจลาออกจากงาน แล้วหันมาทําธุรกิจออนไลน์เอง รายได้ดีขึ้นมาก ขอบคุณอาจารย์จริงๆ",
    },
    {
        name: "ณัฐนนท์ ศรีบุญเรือง",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "พนักงานบริษัท   ",
        comment:
            "หลังจากที่เข้ารับการบรรยาย ได้อ่านหนังสือของอาจารย์แล้ว รู้สึกว่าชีวิตมีสีสัน และมีแรงบันดาลใจในการทํางานมากขึ้นเลยทีเดียว",
    },
    {
        name: "Paul Wilson",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "American Businessman   ",
        comment:
            "After taking online course from Master Essras, I gain very useful knowledge about Feng Shui which I can apply to improve my business. Thank you so much!",
    },
    {
        name: " Sarah Lim",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "Singaporean Officer    ",
        comment:
            "Master Essras explains astrology concepts very clearly and easy to understand. Now I understand more about zodiac compatibility which helps my relationship",
    },
    {
        name: "Toshio Hayashi",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: " Japanese Officer   ",
        comment:
            "I  was impressed with Master Essras's lecture on TV program. He presents the content lively and entertaining way. I became his fan",
    },
    {
        name: "Ayesha Begum",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "Indian Housewife   ",
        comment:
            "Online consultation with Master Essras gives me new perspective to approach problems and set clear goals. This helps reduce my stress. Thank you, Ajarn! ",
    },
    {
        name: "William Ng",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "Chinese Entrepreneur   ",
        comment:
            "I love Master Essras's book about fortune telling. Very accurate and helpful prediction which gives me more confidence to start new business last year. I appreciate his knowledge.",
    },
    
];


const settingPeopleSay = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // className: 'notes-slider',
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            },
        },
    ]
}



const PeopleReview = () => {
    return (
        <>
            <div className="w-full bg-[var(--secondary-color)] p-10 pb-20">
                <div className="w-full">
                    <p className="text-white text-center font-bold text-[30px] mt-10" data-aos="fade-down" >What People Say</p>
                    <p className="text-white text-center text-sm mb-16" data-aos="fade-down" >Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="w-full flex gap-3 justify-center" data-aos="fade-down" >
                    <div className="max-w-[90%] m-auto">
                        <Slider {...settingPeopleSay}>
                            {
                                reviews.map(({ name, profession, comment }) => <PeopleReviewCard {...({ name, profession, comment })} />)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}


function PeopleReviewCard({ name, profession, comment }: any) {
    return (
        <div className="relative min-h-[380px] md:max-w-[376px] md:min-h-[330px] bg-[#fff] rounded-xl p-8 drop-shadow-md ">
            {/* <div className="text-[20px] font-bold text-[#6440FB] mb-8 ">Perfect Job</div> */}
            <div className="text-black font-Poppins">
                {comment}
            </div>
                <div className='absolute bottom-3 w-[70%]'>
                    <hr className="mt-5 w-[100%]" />
                    <div className="flex mt-3 items-center w-[100%]">
                        <div>
                            <Image
                                src={'/assests/avatar.png'}
                                width={60}
                                height={60}
                                alt=""
                                className="object-contain "
                            />
                        </div>
                        <div className="pl-7">
                            <div className="text-md font-semibold text-black">{name}</div>
                            <div className="text-xs text-black">{profession}</div>
                        </div>
                    </div>
                </div>


        </div>
    )
}


export default PeopleReview