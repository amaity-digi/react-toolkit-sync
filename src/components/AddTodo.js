import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Todos from './Todos'
import { addTodos } from '../store/features/todo/todoSlice';

const AddTodo = () => {
    const [inputDetails, setInputDetails] = useState("");
    const dispatch = useDispatch(); // dispatch method pass the value from specific components to store.

    const handleChange = (e) => {
        setInputDetails(e.target.value);
    }

    const handleSubmit = (e) => {
         e.preventDefault();
       console.log(inputDetails);
       dispatch(addTodos(inputDetails));
       setInputDetails("");
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input type='text' value={inputDetails} onChange={handleChange}/>
            <button>Add Todo</button>
           </form>
            <Todos />
        </div>
    )
}

export default AddTodo;
