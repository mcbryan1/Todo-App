/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import '../App.css'
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            items:[],
            currentItem:{
                text:'',
                key:""
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    //Handle Input
    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    //Add Item
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text!==""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    //Delete Item
    deleteItem(key){
        const filteredItems = this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items:filteredItems
            })
    }
    //Edit Text
    setUpdate(text, key){
        const items = this.state.items;
        items.map(item => {
            if(item.key===key){
                item.text=text;
            }
        })
        this.setState({
            items: items
        })
    }

    render() {
        return (
            <div className="App">
               <form action="" id="to-do-form" onSubmit={this.addItem}>
                   <h1>To Do List</h1>
                   <input type="text" name="" id="" placeholder="Enter Text" 
                   value={this.state.currentItem.text}
                   onChange={this.handleInput}
                   />
                   <button type="submit">Add</button>
                   </form> 
                   <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
            </div>
        )
    }
}
