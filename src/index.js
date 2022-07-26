import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
      const items = ['Learn React', 'Build Awesome App', 'Drink water']

      return (
      <ul className='list-group list-group-flush' style={marginAutoStyle}>
         <li className='list-group-item'>{ items[0] }</li>
         <li className='list-group-item'>{ items[1] }</li>
         <li className='list-group-item'>{ items[2] }</li>
      </ul>
   );
};

const AppHeader = () => {
   return <h1 className='text-center'>My Todo list</h1>
};

const SearchPanel = () => {
  const searchText = 'Type here to search'
  
   return <input 
      className='form-control'
      style={marginAutoStyle}
      placeholder={searchText} />
};

const marginAutoStyle = {
   margin: 'auto',
   width: '90%'
};

const App = () => {
      return (
      <div>
         <AppHeader />
         <SearchPanel />
         <TodoList />
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById('root'));