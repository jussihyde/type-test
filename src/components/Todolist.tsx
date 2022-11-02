import React, { useState } from "react";
import { Todo } from "../interfaces";
import { Todotable } from "./Todotable";


export function Todolist() {
    const [todo, setTodo] = useState<Todo>({} as Todo);
    const [todos, setTodos] =useState<Array<any>>([]);


    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, [event.target.id]: event.target.value});
    }

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const deleteTodo = (index: number) => {
        setTodos(todos.filter((todo, i) => i !== index))
    }

    return(
        <>
            <form onSubmit={addTodo}>
                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" value={todo.desc} onChange={inputChanged} />
                <label htmlFor="date">Date</label>
                <input type="text" id="date" value={todo.date} onChange={inputChanged} />
                <label htmlFor="prio">Priority</label>
                <input type="text" id="prio" value={todo.prio} onChange={inputChanged} />
                <input type="submit" value="Submit" />
            </form>
            <Todotable todos={todos} delete={deleteTodo} />
        </>
    )
}