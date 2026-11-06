import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import TodoList from './components/TodoList'
import { useState } from "react";



function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {

    setTodos([
      ...todos, {
        id: crypto.randomUUID(),
        title: title.trim(),
        completed: false
      }
    ])
    
  }

  function resetTodo() {
    setTodos([])
  }

  function deleteTodo(id) {
    if (!window.confirm("Are you sure you want to delete this todo?")) return
    setTodos(todos.filter( (todo) => 
      todo.id !== id
    ))
}


  function toggleTodo(id) {
    setTodos(todos =>
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }


  return (
    <>
      <div className='text-center'>
        <Header />
        <Input addTodo={addTodo}/>
        <TodoList todos={todos} resetTodo={resetTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      </div>
    </>
  )
}

export default App
