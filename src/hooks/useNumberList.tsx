import { useState } from "react"

const useNumberList = ( text:number, initialValue=1) => {
  // TODO
  // refer readme.md for what to return

  const [data, setData] =useState<number[]>([initialValue])

          const appendStart= () => {
            setData([text,...data])
         
        }

          const popEnd =()=> {


          data.pop();

          setData( [...data]) 
         
        }

      const clear =()=>{
      setData([])
     
      }
      const reset =()=>{
      setData([1])
     
      }
    
      const appendEnd=()=>{
         setData([...data, text])
      }

      const popStart=()=>{
        data.shift();
        setData([...data])
      }


const value=data.join(" ")
     
     return {value, appendStart,appendEnd,popStart, popEnd, clear, reset}
       
  }
     


export default useNumberList;
