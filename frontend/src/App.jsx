import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos , setTodos] = useState([]);
  function toggleTodo(id) {
    setTodos(todos.map(todo => 
      todo._id === id ? {...todo, completed: !todo.completed} : todo
    ));
  }

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} onToggleTodo={toggleTodo}></Todos>
    </div>
  )
}

export default App
