import React from "react";

const TodoListItem = ( { label, important = false } ) => {
   
   const spanStyle = {
      fontWeight: important ? '600' : '400'
   }
   
   return <span style={ spanStyle }>{ label }</span>
};

export default TodoListItem;