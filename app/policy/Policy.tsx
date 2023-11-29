import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2`}>
          นโยบายความเป็นส่วนตัวสําหรับเว็บไซต์ Learning-destiny.com
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[17px] font-Poppins leading-8 whitespace-pre-line">
            เราให้ความสําคัญกับความเป็นส่วนตัวและความปลอดภัยของข้อมูลผู้ใช้งานเป็นอย่างยิ่ง
            โดยจะเก็บรวบรวมเพียงข้อมูลส่วนบุคคลขั้นพื้นฐานที่จําเป็นในการให้บริการ
            e-learning เท่านั้น เช่น ชื่อ อีเมล รหัสผ่าน และประวัติการเรียน
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[17px] font-Poppins leading-8 whitespace-pre-line">
            เราจะไม่เปิดเผยหรือขายข้อมูลส่วนบุคคลของท่านให้กับบุคคลที่สาม
            โดยไม่ได้รับความยินยอมจากท่านก่อน
            รวมถึงจะไม่ใช้ข้อมูลดังกล่าวเพื่อวัตถุประสงค์อื่น
            นอกเหนือจากการให้บริการแก่สมาชิก
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[17px] font-Poppins leading-8 whitespace-pre-line">
            ท่านสามารถขอดู หรือแก้ไขข้อมูลส่วนบุคคลของท่านได้ตลอดเวลา
            โดยติดต่อแอดมินของเว็บไซต์ นอกจากนี้
            ท่านยังสามารถร้องขอให้ลบข้อมูลส่วนบุคคลของท่านออกจากระบบของเราได้ด้วย
            เมื่อท่านไม่ประสงค์จะใช้บริการต่อไป
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[17px] font-Poppins leading-8 whitespace-pre-line">
            หากท่านพบเห็นการกระทําที่ไม่เหมาะสมต่อข้อมูลส่วนบุคคล
            กรุณาแจ้งให้เราทราบโดยด่วน
            เพื่อจะได้ดําเนินการแก้ไขปัญหาได้อย่างทันท่วงที ทาง
            Learning-destiny.com
            หวังเป็นอย่างยิ่งว่าจะได้รับความไว้วางใจจากท่านในฐานะสมาชิก
            และหวังเป็นอย่างยิ่งว่าจะให้บริการแก่ท่านได้อย่างดีที่สุด
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            
          </p>
          <br />
       
        </ul>
      </div>
    </div>
  );
};

export default Policy;
