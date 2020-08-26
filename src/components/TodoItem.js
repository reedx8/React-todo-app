import React, { Component } from 'react'
//import TodoInput from './TodoInput'

export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
          <li className="list-group-item text-capitalize d-flex justify-content-between">
              <div className="handle left">
                  <i className="fa fa-bars"></i>
              </div>
              <h6>{title}</h6>
              <div className="todo-icon">
                  <span className="mx-2 text-success" onClick={handleEdit}>
                      <i className="far fa-edit"></i></span>
                  <span className="mx-2 text-danger" onClick={handleDelete}>
                    <i className="fas fa-trash"></i></span>
              </div>
          </li>  
        )
    }
}
