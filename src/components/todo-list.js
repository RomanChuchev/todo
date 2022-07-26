import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
   const elements = todos.map((item) => {
      const { id, ...itemProps } = item;

      return(
         <li className='list-group-item' key={ id } >
            <TodoListItem { ...itemProps } />
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