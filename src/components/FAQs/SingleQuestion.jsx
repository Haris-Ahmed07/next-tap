import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="rounded-lg bg-white  w-full  mx-auto">
      <article className="flex items-center justify-between text-start px-4 py-4 lg:px-6 lg:py-6">
        <h2
          className="cursor-pointer text-[18px] lg:text-[22px] text-dark flex-1 pe-4"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </h2>
        <ul className="flex items-center">
          {!showAnswer && (
            <li>
              <button
                className="bg-darkBlue rounded-md text-white px-3 py-2"
                onClick={() => setShowAnswer(true)}
              >
                <BsPlusLg size={20} />
              </button>
            </li>
          )}
          {showAnswer && (
            <li>
              <button
                className="bg-darkBlue rounded-md text-white px-3  py-2"
                onClick={() => setShowAnswer(false)}
              >
                <BiMinus size={20} />
              </button>
            </li>
          )}
        </ul>
      </article>

      {showAnswer && (
        <article className="px-4 lg:px-6 text-justify sm:mr-24">
          <p className="w-full text-base lg:text-lg pb-6">{answer}</p>
        </article>
      )}
    </div>
  );
}
