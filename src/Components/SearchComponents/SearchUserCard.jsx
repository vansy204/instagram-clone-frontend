import React from 'react'

function SearchUserCard() {
  return (
    <div className='py-2 cursor-pointer'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2023/01/14/19/54/christmas-7718958_640.jpg" alt="" />
            <div className='ml-3 '>
                <p >Full name</p>
                <p className='opacity-70'>username </p>
            </div>
        </div>
    </div>
  )
}

export default SearchUserCard