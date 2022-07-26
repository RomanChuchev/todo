import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
   const elements = todos.map((item) => {
      return(
         <li className='list-group-item'>
            <TodoListItem { ...item} />
         </li>
      );
   })
   
   return (
      <ul className='list-group list-group-flush' style={marginAutoStyle}>
         { elements }
      </ul>
   );
};

const marginAutoStyle = {
   margin: 'auto',
   width: '90%'
};

export default TodoList;