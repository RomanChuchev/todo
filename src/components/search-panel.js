import React from "react";

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

export default SearchPanel;