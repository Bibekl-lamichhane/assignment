'use client'
import React,{ useState }from 'react'

const page = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };
  return (
    <div className='bg-iblack'>
      {/* output  start*/}
      <div className='bg-iblack text-iwhitish text-9xl'>0</div>
      {/* output end */}

      {/* calculate button  */}
      <div className='bg-iblack grid grid-cols-4 gap-4  items-center'>
        <button onClick={()=>handelClick('c')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-black  bg-iwhitish m-10px p-8px'>C</button>
        <button onClick={()=>handelClick('+/-')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-black  bg-iwhitish  m-10px p-8px'>+/-</button>
        <button onClick={()=>handelClick('%')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-black  bg-iwhitish  m-10px p-8px'>%</button>
        <button onClick={()=>handelClick('/')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-iorange m-10px p-8px'>÷</button>
        <button onClick={()=>handelClick('7')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white bg-igrey m-10px p-8px'>7</button>
        <button onClick={()=>handelClick('8')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>8</button>
        <button onClick={()=>handelClick('9')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>9</button>
        <button onClick={()=>handelClick('X')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-iorange m-10px p-8px'>X</button>
        <button onClick={()=>handelClick('4')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>4</button>
        <button onClick={()=>handelClick('5')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>5</button>
        <button onClick={()=>handelClick('6')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>6</button>
        <button onClick={()=>handelClick('-')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-iorange m-10px p-8px'>-</button>
        <button onClick={()=>handelClick('1')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>1</button>
        <button onClick={()=>handelClick('2')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>2</button>
        <button onClick={()=>handelClick('3')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>3</button>
        <button onClick={()=>handelClick('+')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-iorange m-10px p-8px'>+</button>
        <button onClick={()=>handelClick('0')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igreym-10px p-8px'>0</button>
        <button onClick={()=>handelClick('.')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white  bg-igrey m-10px p-8px'>.</button>
        <button onClick={()=>handelClick('=')} className='b1 px-6 py-3 rounded-full border-medium text-3xl text-white bg-iorange m-10px p-8px'>=</button>
      </div>
    </div>

  )
}

export default page