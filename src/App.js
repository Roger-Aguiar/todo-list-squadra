//import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButtons from './components/FilterButton';

function App(props) 
{
  const taskList = props.tasks.map(task => <Todo id = {task.id} name = {task.name} completed = {task.completed} key = {task.id}/>);

  return (

    <div>
      <Navbar></Navbar>
      <div className="todoapp stack-large">
        <Form />

        <div className = "filters btn-group stack-exception">
          <FilterButtons />
          <FilterButtons />
          <FilterButtons />       
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
