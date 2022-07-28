import React, { Component } from "react";
import "./item-add-form.css"

export default class ItemAddForm extends Component {
   render() {
      return (
      <div className="list-group-item form">
         <div className="item-add-form">
            <button  
               type="button"
               className="btn btn-info"
               onClick={() => this.props.onAddItem('New Task') } >
               Add item
            </button>
         </div>
      </div>
      )
   }
}