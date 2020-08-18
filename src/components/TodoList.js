import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">my todo list</h3>
                {
                    items.map(item =>{
                        return(
                            <TodoItem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)}/>
                        )
                    })
                }
                <button type="button" className={items.length === 0 ? "btn btn-danger disabled txt-capitalize mx-auto":"btn btn-danger active txt-capitalize mx-auto"} onClick={clearList}><i class="fas fa-trash-alt"></i> Clear list</button>


            </ul>
        )
    }
}
