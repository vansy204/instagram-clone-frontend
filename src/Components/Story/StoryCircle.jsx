import React from 'react'
import { useNavigate } from 'react-router-dom'

export const StoryCircle = () => {
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate("/story")
  }
  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
        <img className='w-16 h-16 rounded-full' src="https://cdn.pixabay.com/photo/2023/06/22/06/53/beautiful-girl-8080757_640.jpg" alt="" />
        <p className=''>username</p>
    </div>
  )
}
