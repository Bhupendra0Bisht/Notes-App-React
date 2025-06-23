import { useEffect, useState } from 'react'
import './App.css'
import { CreateNote } from './AllFiles/CreateNote'
import { Home } from './AllFiles/Home'
import CreateNoteInterface from './AllFiles/CreateNoteInterface'
import Header from './AllFiles/Header'

function App() {

   const [title, settitle] = useState('')
      const [desc, setdesc] = useState('')
  
      const submithandler = (e)=> {
       e.preventDefault()
  
       let min = 1
       let max = 9
      const id = Math.floor((Math.random() + 1) * 10000 )
       
      if(title && desc){
      setmainTask([...mainTask, {title,desc,id}])
      }
      else{alert("Please fill both the inputs!")}
  
      settitle('')
      setdesc('')
      onClose()
    }

  const [isOpen, setisOpen] = useState(false)

  const onOpen= ()=> {
      setisOpen(true)
  }
   const onClose= ()=> {
      setisOpen(false)
  }

  const [mainTask, setmainTask] = useState([])


// local Storage.....

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('allTasks'))
  if(saved && Array.isArray(saved)){
    setmainTask(saved)
  }
  }, [])

  
  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(mainTask))
    }, [mainTask])


  return (
    <div >
      <Header />
      <Home isOpen={isOpen} onOpen={onOpen} onclose={onClose}
      mainTask={mainTask} setmainTask={setmainTask} />

      <CreateNote mainTask={mainTask} setmainTask={setmainTask} 
       isOpen={isOpen} onOpen={onOpen} onClose={onClose} 
       title={title} settitle={settitle} desc={desc} setdesc={setdesc}
       submithandler={submithandler}/>  
       </div>
  )
} 

export default App



// More features are coming...

// Add Edit and favourite buttons.
// Add seperate page for each note.
// Add diff-diff text-color.
// integrate this app with To-Do.

