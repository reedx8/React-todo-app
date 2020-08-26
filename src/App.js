//import React from 'react';
import React, { Component } from 'react'; // This is what YT coder used isntead of import react from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import uuid from "uuid";
import {v4 as uuid} from "uuid";
import { render } from '@testing-library/react';

// This is the main part where we render everything here
class App extends Component{ // instead of function App() {...}. function App() stopped working when adding state and handleChange
    state={
        items:[],
        id:uuid(),
        item:'',
        editItem:false,
    }
    handleChange = (e)=> { // a function handleChange() that takes in an argument "e"
        this.setState({
            item: e.target.value
        })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        const newItem = {
            id:this.state.id,
            title:this.state.item
        }
        if(this.state.item === ''){
            console.log("Need input");
            return;
        }
        //console.log(newItem)
        const updatedItems = [...this.state.items, newItem]
        this.setState({
            items:updatedItems,
            item:'',
            id: uuid(),
            editItem:false
        })
    }
    clearList = ()=>{
        this.setState({
            items:[]
        })
    }
    handleDelete = (id) =>{
        const filteredItems = this.state.items.filter(item => item.id !== id)
        this.setState({
            items:filteredItems 
        })
    }
    handleEdit = (id) =>{
        const filteredItems = this.state.items.filter(item => item.id !== id)

        const selectedItem = this.state.items.find(item => item.id === id)

        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        })
    }
    
    render() {
        return (
            <div class="container">
                <div class="left">
                        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
                </div>
                <div class="right">
                        <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
                </div>
            </div>
        );
    }
}

export default App;







/* // This is what YT coder uses, but the below fucntion App() came as default for me, so i used it instead
class App extends Component{
    render() {
        return (
            <div>
                This is the new function
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}
*/