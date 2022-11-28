import React from 'react'

const OutlineButton = ({text}) => {
  return (
    <button className='h-[50px] text-[16px] text-[#e72429] bg-[#fff] hover:bg-[#e72429] hover:text-[#fff] shadow-md col-span-1 border-4 w-[150px]   rounded-full '>
        {text}
    </button>
  )
}

export default OutlineButton