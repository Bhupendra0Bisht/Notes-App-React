import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import { AllTasks } from './AllTasks';


export const Home = ({ onOpen, mainTask, DeleteNote, setmainTask}) => {

  return(
    <div id='AllTaskDiv'
     className='bg-zinc-900 ml-4 sm:ml-15 mr-4 sm:mr-15 rounded-t-2xl h-200
     overflow-y-auto overflow-x-hidden relative '>
    <AllTasks mainTask={mainTask} DeleteNote={DeleteNote} setmainTask={setmainTask}/>
    
  {/* Color buttons */}
      {/* <div className='flex justify-end gap-2 pt-3 pr-5 '>
        <span className='bg-red-600  w-5 h-5 rounded-full px-4 py-4 cursor-pointer hover:scale-108'></span>
        <span className='bg-yellow-600 w-5 h-5 rounded-full px-4 py-4 cursor-pointer hover:scale-108'></span>
        <span className='bg-black w-5 h-5 rounded-full px-4 py-4 cursor-pointer hover:scale-108'></span>
        <span className='bg-blue-500 w-5 h-5 rounded-full px-4 py-4 cursor-pointer hover:scale-108'></span>
        <span className='bg-pink-600 w-5 h-5 rounded-full px-4 py-4 cursor-pointer hover:scale-108'></span>
      </div> */}

  {/* Add button */}
        <div className=' flex items-center justify-center absolute right-8 bottom-8'>             
       <button onClick={onOpen}
        className='bg-orange-500 rounded-full w-15 h-15 font-lg text-5xl
        hover:bg-orange-600 cursor-pointer fixed sm:bottom-30 bottom-25 sm:right-40 right-15 pb-2.5 '>
          +
        </button>
        </div>
        </div>
  );
}

export default Home;