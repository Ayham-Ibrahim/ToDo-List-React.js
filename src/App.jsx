import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {

  const [todos,setTodos] = useState([]);
  const inputRef = useRef();

  const handleButton = ()=>{
    const text = inputRef.current.value;
    const item = {
      completed : false,
      text
    };
    setTodos([...todos,item]); 
    inputRef.current.value="";
  }

  const handleStatus = (index) => {
    const newtodos = [...todos];
    newtodos[index].completed = !newtodos[index].completed;
    setTodos([...newtodos]);
  }

  const handleDelete = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index,1)
    setTodos([...newtodos]);
  }

  return (
    <>
    <h1>To Do List🧾</h1>
      <div className='container'>
        <div className="form">
          <input  ref={inputRef} type="text" className='input'/>
          <button className='add' onClick={handleButton}>Add Task</button>
        </div>
        <div className='tasksDiv'>
          <ul>
            {todos.map(({text,completed},index)=>{
              return (
                <div key={index} className='task'>
                  <li className={completed ? "done" : ""} onClick={()=>handleStatus(index)}>{text}</li>
                  <span className="trash" onClick={() => handleDelete(index)}>🗑️</span>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <footer>By Ayham Ibrahim &copy; 2024</footer>
    </>
  )
}

export default App
