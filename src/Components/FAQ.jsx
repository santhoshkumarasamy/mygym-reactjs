import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FAQ({ question, answer }) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article className="faq" onClick={() => setIsAnswerShowing((prev) => !prev)} >
      <div>
        <h4>{question}</h4>
        <button
          className="faq__icon"
        >
          {
            !isAnswerShowing? <AiOutlinePlus /> : <AiOutlineMinus />
          }
        </button>
      </div>
      {
       isAnswerShowing &&  <p>{answer}</p>
      }
    </article>
  );
}

export default FAQ;
