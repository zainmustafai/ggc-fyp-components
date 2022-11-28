import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrimaryButton = ({text,link}) => {
  const navigate = useNavigate();
  return (
    <button 
    onClick={()=>{
      navigate(link);
    }}
    className='col-span-1 text-[16px] h-[50px] w-[150px]  bg-[#f76400] rounded-full text-[#fff] hover:border-4 hover:bg-[#fff] hover:text-[#f76400]'>
        {text}
    </button>
  )
}

export default PrimaryButton