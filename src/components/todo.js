const ToDo = ({message, changeMessage, addToDo}) => {
    return (
        <div className="text-center mt-4">
            <input name="todo" onChange={(e) => changeMessage(e)} value={message} placeholder="Enter text" />
            <button className="btn-sm btn-secondary btn-sm" onClick={addToDo}>Add</button>
        </div>
    )
}

export default ToDo;