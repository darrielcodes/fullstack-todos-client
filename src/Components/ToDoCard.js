

const ToDoCard = (props) => {
    const { toDo, urlEndpoint, setShouldRefetch } = props;

    const handleSetToDoComplete = async () => {
        setShouldRefetch(true);
        const response = await fetch(`${urlEndpoint}/todos/update-one/${toDo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", 
              },
              body: JSON.stringify({ 
                        isComplete: !toDo.isComplete
                     }),
            });
        setShouldRefetch(false)
        console.log(!toDo.isComplete)
    };

    const handleDeleteToDo = async () => {
        setShouldRefetch(true);
        const response = await fetch(`${urlEndpoint}/todos/delete-one/${toDo.id}`, {
            method: "DELETE"
            });
        setShouldRefetch(false)
        console.log(!toDo.isComplete)
    }

    return (
        <div>
            <h2>{toDo.title}</h2>
            <p>ID: {toDo.id}</p>
            <p>Description: {toDo.description}</p>
            <p>Priority: {toDo.priority}</p>
            <p>Is Complete: </p>
            {toDo.isComplete && <p>Complete</p>}
            {!toDo.isComplete && <p>Incomplete</p>}
            <p>Creation Date: {toDo.creationDate}</p>
            <p>Last Modified: {toDo.lastModified}</p>
            <p>Completed Date: {toDo.completedDate}</p>
            <br/>
            <button onClick={() => {
                handleSetToDoComplete();
            }}>Toggle Complete</button>
             <button onClick={() => {
                handleDeleteToDo();
            }}>Delete ToDo</button>
            <hr/>
        </div>
    )
};

export default ToDoCard;