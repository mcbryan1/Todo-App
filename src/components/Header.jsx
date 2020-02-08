import React, { Component } from 'react'
import '../App.css'
import ListItems from './ListItems'

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

    render() {
        return (
            <div className="App">
               <form action="" id="to-do-form" onSubmit={this.addItem}>
                   <input type="text" name="" id="" placeholder="Enter Text" 
                   value={this.state.currentItem.text}
                   onChange={this.handleInput}
                   />
                   <button type="submit">Add</button>
                   </form> 
                   <ListItems items={this.state.items}/>
            </div>
        )
    }
}
