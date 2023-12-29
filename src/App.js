import './App.css';
import {useState} from 'react';
import Counter from './components/counter';
import ToDoList from './components/todolist';
import ToDo from './components/todo';

function App() {
    const todos = [
      {name:'George', completed: true},
      {name:'John', completed: false},
      {name:'Sam', completed: true}
    ]
    const [names] = useState(todos);

    const [message, setMessage] = useState('')
    const [todoList, setToDoList] = useState(names)

    const nameMap = todoList.map((todo,index) => (
        <div key={index} className="">
            <span style={{float:'left',width:'300px'}}
                 className={todoList[index].completed ? 'completed todo-text' : 'todo-text'} >{todo.name}</span>
            <button className="btn-sm btn-danger me-2" onClick={() => removeToDo(index)}>X</button>
            <button className="btn-sm btn-info" onClick={() => setCompleted(index)}>Complete</button>
        </div>
    ))

    function setCompleted(index) {
        var copy = [...todoList];
        copy[index].completed = !copy[index].completed;
        setToDoList(copy);
    }

    function removeToDo(index) {
        var copy = [...todoList];
        copy.splice(index, 1);
        // var filtered = todoList.filter((todo, i) => index != i);
        setToDoList(copy);
    }

    function addToDo() {
      var todo = {
          name: message,
          completed: false
      };

      setToDoList([...todoList, todo])
      setMessage('')
  }
    const changeMessage = (event) => {
        setMessage(event.target.value);
    }

  return (
    <div className="container">
      <h3 className="text-center">Task Manager</h3>
        <ToDo changeMessage={changeMessage} message={message} addToDo={addToDo}/>
        <ToDoList nameMap={nameMap}/>
    </div>
  );
}

export default App;
