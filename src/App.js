import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todo,valeu]=useState([])
  
  useEffect(()=>{
    const storedTodos=JSON.parse(localStorage.getItem('todo'))
    if(storedTodos.length>0){
      valeu(storedTodos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todo))
  },[todo])
  function addTodo(text){
    valeu([...todo,text])
  }
  function removeTodo(index){
    valeu(todo.filter((todo,i)=>i !==index))
  }
  function editTodo(index,text){
    const newTodo=[...todo]
    newTodo[index]=text
    console.log("newTodosxx",text)
    valeu(newTodo)
  }
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <form
      onSubmit={(event)=>{
    event.preventDefault()
    addTodo(event.target.elements.tdx.value)
    event.target.elements.tdx.value=''
  }} >
        <input type='text' name='tdx' />
        <button type='submit'>Add todo</button>
      </form>
      <ul>
        {todo.map((tdx,index)=>(
          <li key={index}>
            <input type='text' value={tdx} onChange={(event)=>editTodo(event.target.value)} />
                       {tdx}
            <button onClick={()=> removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
