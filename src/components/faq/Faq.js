import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";
import "./Faq.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq text-center">
        <div className="text-center" data-aos="fade-up">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2 style={{fontWeight:"bold",fontSize:"36px"}}>FAQs</h2>
          <p className="u-text-small" style={{fontSize:"18px"}}>
          Everything you need to know so you can use Deso Wheel properly.
          </p>
        </div>
        <div className="questions" >
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
