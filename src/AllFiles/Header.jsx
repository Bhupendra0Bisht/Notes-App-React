import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-center sticky top-0 z-1 bg-black pb-5'>
        <div className='flex items-center justify-center font-semibold text-4xl
        border-b-amber-400 border-2 border-black mt-4 w-50 '>
        <h1 
        >Note List</h1>
       </div>
    </div>
  )
}

export default Header