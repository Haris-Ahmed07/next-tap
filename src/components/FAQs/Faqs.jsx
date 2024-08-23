import React, { useState } from 'react';
import { questions } from "../../data.js";
import SingleQuestion from "./SingleQuestion";

const Faqs = () => {
  const [cards] = useState(questions);

  return (
    <div className="bg-gray-100 w-full xxl:py-12 xl:py-12 lg:py-10 md:py-10 sm:py-10 xs:py-10
    xxl:px-[5%] xl:px-[5%] lg:px-[2%] md:px-[1%]">
      <h1 className='text-[35px] text-black font-semibold text-center font-montserrat'>FAQs</h1>
      <section className=" mx-3 px-4 xxl:pt-8 xl:pt-8 lg:pt-8 md:pt-6 sm:pt-6 xs:pt-6 xxl:pb-2 xl:pb-4 lg:pb-4 md:pb-4 sm:pb-4 xs:pb-2 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xs:gap-y-3 sm:gap-x-3 md:gap-x-3 lg:gap-x-3 xl:gap-x-3 xxl:gap-x-3">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faqs;
