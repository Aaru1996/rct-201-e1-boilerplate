import React from "react";
import { useState } from "react";
// import { setTextRange } from "typescript";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
 

};
const List1 = (props: List1Props) => {
  const [text, setText] =useState<any>()
  

  const { appendStart,popEnd,clear, reset, value}= useNumberList(text)

     

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">List 1</h3>
  

      <div data-testid="list1-element">{value}</div>
      <input data-testid="list1-input"
        value={text}  onChange={(e) => setText(Number(e.target.value))} />
      <button data-testid="list1-btn-append-start"
          onClick={appendStart}
          >
          Append Start
      </button>
      <button data-testid="list1-btn-pop-end"
           onClick={popEnd} >
         Pop End
      </button>
      <button data-testid="list1-btn-clear"
            onClick={clear}>
          Clear
      </button>
      <button data-testid="list1-btn-reset"
             onClick={reset}>
          reset
      </button>
    </div>
  );
};

export default List1;
