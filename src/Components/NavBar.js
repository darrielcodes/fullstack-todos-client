import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/todo-form">Create ToDo</Link>
        </div>
    )
};

export default NavBar;