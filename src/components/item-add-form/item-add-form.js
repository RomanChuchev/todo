import React, { Component } from "react";
import "./item-add-form.css"

export default class ItemAddForm extends Component {

   render() {

         return (
         <div  type="button"
               className="list-group-item form">

            <div className="item-add-form">
               <button  
                  className="btn btn-primary"
                  onClick={() => this.props.onAddItem('Hello World!') } >
                  Add item
               </button>
            </div>
         </div>
      )
   }
}