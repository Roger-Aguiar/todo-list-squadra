//import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

function App(props) 
{
  const taskList = props.tasks.map(task => <Todo id = {task.id} name = {task.name} completed = {task.completed} key = {task.id}/>);

  return (

    <div>
      <Navbar></Navbar>
      <div className="todoapp stack-large">
            
      <form>
        <h2 className = "label-wrapper">
          <label htmlFor = "new-todo-input" className = "label__lg">Enter your task</label>
        </h2>

        <input type = "text" id = "new-todo-input" className = "input input__lg" name = "text" autoComplete = "off" />

        <button type = "submit" className = "btn btn__primary btn__lg">Add Task</button>        
      </form>

      <div className = "filters btn-group stack-exception">
        
        <button type = "button" className = "btn toggle-btn" aria-pressed = "true">
          <span className = "visually-hidden">Show</span>
          <span>All</span>
          <span className = "visually-hidden">Tasks</span>
        </button>

        <button type = "button" className = "btn toggle-btn" aria-pressed = "false">
          <span className = "visually-hidden">Show</span>
          <span>Active</span>
          <span className = "visually-hidden">Tasks</span>
        </button>

        <button type = "button" className = "btn toggle-btn" aria-pressed = "false">
          <span className = "visually-hidden">Show</span>
          <span>Completed</span>
          <span className = "visually-hidden">Tasks</span>
        </button>

      </div>

      <h2 id = "list-heading">
        3 tasks remaining
      </h2>

      <ul role = "list" className = "todo-list stack-large stack-exception" aria-labelledby = "list-heading">        
        {taskList}
      </ul>
    </div>

    </div>

      );
}

export default App;
