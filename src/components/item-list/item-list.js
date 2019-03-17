import React from 'react';

import './item-list.css';

const ItemList = (props) => {

    const {onItemSelected, selectedItem, children: renderLabel, data} = props;
    const items =  data.map((element) => {
        const { id } = element;
        let className = "list-group-item";
        className += (selectedItem === id) ? " selected" : "";
        return (
            <li
                className={className}
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {renderLabel(element)}
            </li>
        );
    });

    return(
        <ul className="item-list list-group">
            {items}
        </ul>
    )
};

export default ItemList;
