
export const AllTasks = ({mainTask,setmainTask}) => {
  
    const DeleteNote = (id)=> {        
      const updateNotes = mainTask.filter(note => note.id !== id);
  
      setmainTask(updateNotes)
      localStorage.setItem("allTasks", JSON.stringify(updateNotes))
    }

   let renderTask = <h2 className='flex justify-center'>No Saved Available!</h2>
  
     if(mainTask.length > 0){
      const today = new Date()
      const monthNames = ['Jan','Feb','Mar','Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  
      const month = monthNames[today.getMonth()]
      const date = today.getDate()
  
      renderTask =  mainTask.map((t,i)=> {
      return ( 
        <li key={i} 
        className=' bg-zinc-800 mb-4 px-2 sm:px-5 pb-2 rounded-xl flex items-center justify-between
         shadow-md shadow-zinc-800 relative '>
        <div>
         <h2 className='pt-2 pl-1.5 text-2xl font-normal'> {t.title} </h2>
         <h4 className='font-light p-1.5'> {t.desc} </h4>
         <h6 className='text-sm p-1'> {[month + ' ', date]} </h6>
       </div>
       <button onClick={()=> DeleteNote(t.id)}
       className='bg-red-600 px-3 cursor-pointer rounded hover:bg-red-500 shadow-sm shadow-red-500 absolute right-3 bottom-3 md:right-8'>
        Del</button>
      </li>
      )
   })
     }
       
  return (
    <div >
          {/* Task List */}
          <div className=' rounded-t-xl'>
          <ul className='lg:pl-10 pl-3 lg:pr-10 pr-3 lg:pt-8 pt-5 text-md lg:text-lg font-medium '>
            {renderTask}
          </ul>
        </div>
    </div>
  )
}
