import React from 'react'
import './ListItems.css'

export default function ListItems(props) {
    const items = props.items;
    const ListItems = items.map (item =>
        {
            return <div className="list" key="item.key">
                <p>{item.text}</p>
            </div>
    })
    return (
        <div>
            {ListItems}
        </div>
    )
}
