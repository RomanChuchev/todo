import React, { Component } from "react";
import "./item-add-form.css"

export default class ItemAddForm extends Component {
   
   state = {
      lable: ''
   }

   onLableChange = (event) => {
      this.setState({
         lable: event.target.value
      })
   }

   onSubmit = (event) => {
      event.preventDefault();
      if (this.state.lable === '') return
      this.props.onAddItem(this.state.lable)
      this.setState({
         lable: ''
      })
   }

   render() {
      return (
         <form className="item-add-form d-flex"
               onSubmit={this.onSubmit}>

            <input 
               type="text"
               className="form-control"
               onChange={this.onLableChange}
               placeholder="What needs to be done"
               value={this.state.lable}
            />
            <button  
               type="button"
               className="btn btn-primary"
               onClick={this.onSubmit} >
               Add item
            </button>

         </form>
      );
   };
};