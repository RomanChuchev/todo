import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
   return (
   <ul className='list-group list-group-flush' style={marginAutoStyle}>
      <li className='list-group-item'><TodoListItem label="Learn React" important /></li>
      <li className='list-group-item'><TodoListItem label="Build React Add"  /></li>
      <li className='list-group-item'><TodoListItem label="Drink water" /></li>
   </ul>
   );
};

const marginAutoStyle = {
   margin: 'auto',
   width: '90%'
};

export default TodoList;