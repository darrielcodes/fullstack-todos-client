import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToDoFormPage = (props) => {
    const { urlEndpoint, setShouldRefetch } = props;
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [errorSucess, setErrorSuccess] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleCreateToDo = async () => {
        setShouldRefetch(true);
        const response = await fetch(`${urlEndpoint}/todos/create-one`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
              },
              body: JSON.stringify({ 
                        title,
                        description,
                        priority
                     }),
            });
        const updatePayload = await response.json();
        setErrorSuccess(updatePayload.success)
        setErrorMessage(updatePayload.message)
        if (updatePayload.success === true){
                    navigate("/");
                } else {
                setErrorMessage(updatePayload.message)
            }
        setShouldRefetch(false)
        console.log(errorSucess)
    };

    return (
        <div>
            <h1>Create To Do Form</h1>
            <br/>
            <h2>{errorMessage}</h2>
            <br/>
            <label>Title: </label>
            <input type="text" value={title} onChange={(e) => {
                setTitle(e.target.value)
            }}></input>
            <br/>
            <label>Description: </label>
            <textarea value={description} onChange={(e) => {
                setDescription(e.target.value)
            }}></textarea>
            <br/>
            <label>Priority: </label>
            <select onChange={(e) => {
                setPriority(e.target.value)
            }}>
                <option></option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <br/>
            <button onClick={() => {
                handleCreateToDo();
            }}>Create ToDo</button>
        </div>
    )
};

export default ToDoFormPage;