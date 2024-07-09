// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import About from './MyComponents/About';
import Footer from './MyComponents/Footer';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const onDelete = (todo)=>{
    // console.log("I am onDelete of todo", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodoItem = (title, desc)=>{
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const currentDate = new Date();
    const date = currentDate.getDate() + '-' + monthNames[currentDate.getMonth()] + '-' + currentDate.getFullYear(); 
    const time = currentDate.getHours() + ':' + currentDate.getMinutes();
    let sno = todos.length > 0 ? todos[todos.length-1].sno + 1 : 1;
    const newTodoItem = {
      sno: sno,
      date: date,
      time: time,
      title: title,
      desc: desc
    };
    setTodos([...todos, newTodoItem]);
  }

  const onUpdate = (sno, title, desc)=>{
    const index = sno - 1;
    if (index >=0 && index < todos.length) {
      const updatedTodo = todos.map(todo => 
        todo.index === index ? { ...todo, title, desc } : todo
      );
      setTodos(updatedTodo);
    } else {
      // Show error
    }
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      date: "9-Jul-2024",
      time: "13:19",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      sno: 2,
      title: "Go to the Mall",
      date: "9-Jul-2024",
      time: "13:21",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      sno: 3,
      title: "Go to the Airport",
      date: "9-Jul-2024",
      time: "13:22",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      sno: 4,
      title: "Go to the Home Gym",
      date: "9-Jul-2024",
      time: "13:30",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    }
  ])

  const title = "Todos List";

  return (
    <>
    <BrowserRouter>
      <Header title={title}/>
      <Routes>
        <Route exact path="/" element={
            <Todos title={title} todos={todos} onDelete={onDelete} addTodoItem={addTodoItem} onUpdate={onUpdate}/>
            }>
        </Route>
        <Route exact path="/about" element={
            <About/>
            }>
        </Route>
      </Routes>
      <Footer title={title}/>
    </BrowserRouter>
    </>
  );
}

export default App;
