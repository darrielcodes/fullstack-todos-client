import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import { useState, useEffect } from 'react';
import ToDoFormPage from './Pages/ToDoFormPage';


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;


function App() {
  const [toDoList, setToDoList] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  useEffect(() => {
    const fetchToDos = async () => {
      const response = await fetch(`${urlEndpoint}/todos/all`);
      const responseData = await response.json();
      //console.log(responseData.toDos)
      setToDoList(responseData.toDos);
    }
    fetchToDos();
  }, [shouldRefetch]
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout/>,
      children: [
      {
        element: <HomePage toDoList={toDoList} urlEndpoint={urlEndpoint} setShouldRefetch={setShouldRefetch}/>,
        index: true
      },
      {
        element: <ToDoFormPage urlEndpoint={urlEndpoint} setShouldRefetch={setShouldRefetch}/>,
        path: "/todo-form"
      }
  ]
  }]);

  return (
    <div className="App">
      <RouterProvider router={router} toDoList={toDoList}/>
    </div>
  );
}

export default App;
