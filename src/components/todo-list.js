import { useContext } from "react";
import { TodoContext } from "../App";

const TodoList = () => {
    const {todoState} = useContext(TodoContext)
    return(
        <div>todo list</div>
    )
}

export default TodoList;