import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit, editItem} = this.props

        return (
            <div className="card-transparent card-body my-3">
                <form onSubmit={handleSubmit}>  {/* Concept here */}
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-list"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Add an item here" value={item} onChange={handleChange}/>
                    </div>
                    <button 
                    type="submit" 
                    className={
                    editItem ? "btn btn-success mx-auto d-block mt-2": "btn btn-primary mx-auto mt-2 d-block"}> <i class="fas fa-plus-circle"></i> 
                    {editItem ? " Edit item" : " Add"} </button>
                </form>
            </div>
        )
    }
}
