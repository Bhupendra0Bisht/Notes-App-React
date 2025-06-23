import { useState } from 'react'
import CreateNote from './CreateNote'

const CreateNoteInterface = ({mainTask, setmainTask }) => {

    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')

    const submithandler = (e)=> {
     e.preventDefault()

    if(title && desc){
    setmainTask([...mainTask, {title,desc}])
    }
    else{alert("Please fill the both inputs!")}

    settitle('')
    setdesc('')
  }

  return (
    <CreateNote >
    <div className='z-50'>
      <form onSubmit={(e)=> submithandler(e)}
      className='ml-20 mr-20 mt-10 flex flex-col pb-6 '>
       <input value={title} 
        onChange={(e)=> settitle(e.target.value)}
       type='text' placeholder='Your Title here'
       className='text-lg pl-5 border-white border-1 pt-0.5 pb-0.5 rounded-lg outline-none'>
       </input>
       <textarea value={desc}
        onChange={(e)=> setdesc(e.target.value)}
       id='textArea' type='text' placeholder='Description here'
       className='mt-5 text-lg pl-5 border-white border-1 pt-0.5 pb-0.5 rounded-lg resize-none outline-none'>
       </textarea>
       <div className='mt-6 flex items-center justify-center '>
       <button
       className='bg-[#121212] px-6 py-1 text-lg rounded-3xl cursor-pointer hover:scale-102 hover:bg-zinc-950'>
         Add Note</button>
         </div>
      </form>
    </div>
    </CreateNote>
  )
}

export default CreateNoteInterface