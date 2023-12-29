import './App.css';
import Counter from './components/counter';
import ToDoList from './components/todolist';

function App() {
  return (
    <div className="container">
    <Counter />
    <ToDoList />
    </div>
  );
}

export default App;
