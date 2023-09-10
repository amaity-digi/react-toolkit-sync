import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../store/features/todo/todoSlice';

// useDispatch: Whenever you want to send something from the component to the parent or the store we have useDispatch.
// useSelector: if you want to something from the store to the component that time we used useSelector.
const Todos = () => {
    const {todos} = useSelector((state) => state.todos); // here we are doing destructuing, based on todos, because inside todoSlice we have initialValue from there we have todos, so we are storing data there only.
    const dispatch = useDispatch();
    console.log("+++", todos)

    const handleDelete = (id) => {
    console.log('idddd',id)
    dispatch(removeTodo(id));
    }

  return (
    <ul>
        {todos?.map(({id, text}) => (
          <li key={id} onClick={() => handleDelete(id)}>
            {text}
          </li>
        ))}
    </ul>
  )
}

export default Todos