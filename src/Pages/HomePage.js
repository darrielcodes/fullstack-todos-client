import ToDoCard from "../Components/ToDoCard";

const HomePage = (props) => {
    const {toDoList, urlEndpoint, setShouldRefetch} = props;

    return (
        <div>
            <h1>FullStack ToDo Application</h1>
            {toDoList.map((toDo, index) => {
                return <ToDoCard toDo={toDo} urlEndpoint={urlEndpoint} key={index} setShouldRefetch={setShouldRefetch}/>
            })}
        </div>
    )
};

export default HomePage;