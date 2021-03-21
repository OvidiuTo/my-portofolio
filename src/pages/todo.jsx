import React from 'react';
import {Link} from 'react-router-dom';
import TodoList from "../components/todo-app/TodoList"
import "../components/todo-app/Todo.scss"

const Todo = () =>{
    return(
        <div className="todo-background">
            <ul>
            <li><Link to="/"><a>Back</a></Link></li>
            </ul>
        <div className="todo-app">
           <TodoList/>
           
        </div>
        </div>
    );
}

export default Todo;