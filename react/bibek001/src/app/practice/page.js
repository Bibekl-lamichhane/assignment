'use client'
import React, { useState } from 'react'
import {Button} from "@nextui-org/react";

const page = () => {
    let [num,setNum]=useState(1)
    const increment=()=>{
       setNum(num+1)
    }
    const decrement=()=>{
       setNum(num-1)
    }
    
  return (
    <div>
         <Button onClick={increment} color="primary" variant="faded">
        +
      </Button>{num}
      <Button onClick={decrement}  color="primary" variant="faded">
        -
      </Button>  
    </div>
  )
}

export default page


