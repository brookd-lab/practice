import {useState} from 'react';
const ToDoList = () => {
    const [names, setNames] = useState([
        {name:'George', completed: true},
        {name:'John', completed: false},
        {name:'Sam', completed: true}
    ]);
    const [message, setMessage] = useState('')
    const [todoList, setToDoList] = useState(names)

    const nameMap = todoList.map((todo,index) => (
        <div key={index}>
            <span style={{float:'left',width:'300px'}}
                 className={todoList[index].completed ? 'completed' : ''}>{todo.name}</span>
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
        setToDoList([
            ...todoList,
            { name: message }
           ])
        setMessage('')
    }

    const changeMessage = (event) => {
        setMessage(event.target.value);
    }

    return (
        <div className="text-center mt-4">
            <label className="me-2">Add a name</label>
            <input name="todo" onChange={changeMessage} value={message} placeholder="Enter text" />
            <button className="btn-sm btn-secondary btn-sm" onClick={addToDo}>Add</button>
            <hr />
            {nameMap}
        </div>
    )
}

export default ToDoList;