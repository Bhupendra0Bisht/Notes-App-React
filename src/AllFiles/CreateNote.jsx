import React, { useState } from "react";

export const CreateNote = ({ isOpen,onClose, title,settitle,desc,setdesc, submithandler}) => {

  return (
      <div 
      className='flex justify-center '>
        {isOpen && 
        <>
        <div 
       className='bg-zinc-900 ml-2 mr-5 pt-1 z-50 sm:h-75 lg:w-200 sm:w-140 w-90 absolute sm:top-40 top-45 rounded-lg px-2 '>
      
  <form onSubmit={(e)=> submithandler(e)}
      className=' sm:mt-10 mt-5 flex flex-col sm:pb-6 pb-4'>
       <input value={title} 
        onChange={(e)=> settitle(e.target.value)}
       type='text' placeholder='Your Title here'
       className='sm:text-2xl text-xl font-semibold pl-5 border-white border-1 p-2 rounded-lg outline-none'>
       </input>
       <textarea value={desc}
        onChange={(e)=> setdesc(e.target.value)}
       id='textArea' type='text' placeholder='Description here'
       className='mt-6 text-lg pl-5 border-white border-1 pt-0.5 pb-0.5 rounded-lg resize-none outline-none h-40 sm:h-25'>
       </textarea>
       <div className='mt-6 flex items-center justify-center '>
       <button 
       className='bg-zinc-800 sm:px-6 px-4 sm:py-3 py-2 text-lg rounded-3xl cursor-pointer hover:scale-102 hover:bg-zinc-950'>
         Add Note</button>
         </div>
  </form>

        </div>
        <div onClick={onClose}
         className='backdrop-blur w-screen h-screen absolute top-0 z-40'/>
        </>
       }
    </div>
  )
}

export default CreateNote;