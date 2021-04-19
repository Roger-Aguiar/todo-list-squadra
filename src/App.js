//import './App.css';
import React, {useState} from 'react';
import {nanoid} from "nanoid";

import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButtons from './components/FilterButton';


function App(props) 
{
  const [tasks, setTasks] = useState(props.tasks);
  
  function toggleTaskCompleted(id)
  {
    const updateTasks = tasks.map(task =>
      {
        if(id === task.id)
        {
          return {...task, completed: !task.completed}
        }
        return task;
      });
      setTasks(updateTasks);
  }

  function deleteTask(id)
  {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName)
  {
    
    const editedTaskList = tasks.map(task => 
      {
        if (id === task.id)
        {
          return {...task, name: newName}
        }
        return task;
      });
      setTasks(editedTaskList);
  }
  
  
  const taskList = tasks.map(task => (
  <Todo 
    id = {task.id} 
    name = {task.name} 
    completed = {task.completed} 
    key = {task.id}
    toggleTaskCompleted = {toggleTaskCompleted}
    deleteTask = {deleteTask}
    editTask = {editTask}
  />));
  
  function addTask(name)
  {
    const newTask = 
    {
      id: "todo-" + nanoid(),
      name: name,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskNoun} remaining`;
  return (

    <div>
      <Navbar></Navbar>
      <div className="todoapp stack-large">
        <Form addTask = {addTask} />

        <div className = "filters btn-group stack-exception">
          <FilterButtons />
          <FilterButtons />
          <FilterButtons />       
        </div>
      
        <h2 id = "list-heading">
          {headingText}
        </h2>

        <ul role = "list" className = "todo-list stack-large stack-exception" aria-labelledby = "list-heading">        
          {taskList}
        </ul>
      </div>

    </div>

      );
}

export default App;
