import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
};
const List2 = (props: List2Props) => {
  const [text, setText] =useState<number>(0)

  const { popStart,clear, reset, value, appendEnd}= useNumberList(text)

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">List 2</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{value}</div>

      <input data-testid="list2-input" type="number" onChange={(e) => setText(Number(e.target.value))} 
           
          />
      <button data-testid="list2-btn-append-end"
      onClick={appendEnd}>
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={popStart}>
          Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={clear}>
         Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={reset}>
          Reset
      </button>
    </div>
  );
};

export default List2;
