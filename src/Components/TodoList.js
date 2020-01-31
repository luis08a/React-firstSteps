import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component{
    constructor(props){
        super(props)
    }

    todoList = () =>{
        const todos = this.props.items
        const listTodo = todos.map((todo,i) =>
            <li key={i}>
               <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            </li>
        )
        return listTodo;
    }

    render(){
        let todos = this.todoList();
        return(
            <ul>
                {todos}
            </ul>
        )
    }
}

