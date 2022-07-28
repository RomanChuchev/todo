import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() { 

    let classes = 'btn btn-outline-secondary'

    return(
      <div className="btn-group">

        <button type="button"
                className='btn btn-info'
          >All
        </button>
        <button type="button"
                className={classes}
          >Active
        </button>
        <button type="button"
                className={classes}
          >Done
        </button>
        
      </div>
    );
  };
};
