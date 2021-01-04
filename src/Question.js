import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  // state value
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <article className ="question">
        <header>
          <h4>{title}</h4>
          <button className ="btn" onClick ={() => setShowInfo(!showInfo)}>
            {/* ternary operator if showInfo is true then Minus else Plus*/}
            {showInfo? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {
          // if showInfo is true then display the paragraph
          showInfo && <p className ="">{info}</p>
        }
      </article>
    </>
  );
};

export default Question;
