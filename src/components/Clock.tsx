import React from "react";
import { useState } from "react";
import useClock from "../hooks/useClock";

type Props = {
    
};

const Clock = (props: Props) => {
  
    const {hours, minutes, second} =useClock()
   
   
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        24 hours Live custom component Clock
      </h4>
     
      <span data-testid="clock-hours">
       
        {hours}
        </span>
        :
      <span data-testid="clock-minutes">
        
        {minutes}
      </span>
       :
      <span data-testid="clock-seconds">
       
        {second}
        </span>
    </div>
  );
};

export default Clock;
