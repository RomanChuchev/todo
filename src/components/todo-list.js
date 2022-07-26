import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
   const items = ['Learn React', 'Build Awesome App', 'Drink water']

   return (
   <ul className='list-group list-group-flush' style={marginAutoStyle}>
      <li className='list-group-item'><TodoListItem /></li>
      <li className='list-group-item'>{ items[1] }</li>
      <li className='list-group-item'>{ items[2] }</li>
   </ul>
);
};

const marginAutoStyle = {
   margin: 'auto',
   width: '90%'
};

export default TodoList;