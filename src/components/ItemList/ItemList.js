import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
    return (
        <div className="grid">
            {items.map(item => <Item colNum={4} item={item} key={item.id}/>)}
        </div>
    )
}

export default ItemList
