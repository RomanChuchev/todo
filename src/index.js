import React from 'react';
import ReactDOM from 'react-dom';

const el = (
   <div>
      <h1>My Todo list</h1>
      <input placeholder='search'></input>
      <ul>
         <li>Learn React</li>
         <li>Build Awesome App</li>
      </ul>
   </div>
);

ReactDOM.render(el, document.getElementById('root'));
