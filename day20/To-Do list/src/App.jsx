import { useState } from 'react'
import { BsPlusCircle, BsTrash, BsPencilSquare } from 'react-icons/bs';

import './App.css'
export default function App() {
  const [task,setTask]=useState('')
  const [todos,setTodos]=useState([])
  const [editIndex,setEditIndex]=useState(null)
  const handleClick =()=>{
    if(task.trim()===""){
      alert("no blanks allowed")
      return                                     //this would help us not to add the blank note
    }
    if(editIndex !==null){
      const updated=[...todos]
      updated[editIndex]=task
      setTodos(updated)
      setEditIndex(null)

    }else{
    setTodos([...todos,task])
    }
    //console.log("did you clicked?")
    setTask('')
    
  }

  function theDelete(index){
    const newTodos = todos.filter((_,i)=> i !== index)
    setTodos(newTodos)

  }

  return (
    <div>To-Do List
    <input type='text'
    placeholder='enter task' 
    value={task}
    onChange={e => setTask(e.target.value)}  />
    <button onClick={handleClick}>{editIndex!== null ? 'Updated' : 'Add'}</button>
    <ol>
      {todos.map((work,index)=>(
        <li key={index}>{work}
        <button onClick={()=>{setTask(todos[index]);
          setEditIndex(index)
       } }>edit</button>
        <button onClick={()=>theDelete(index)}>delete</button>
        </li>

      ))}
    </ol>
</div>
  )
}
