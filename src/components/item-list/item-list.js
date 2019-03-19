import React from 'react';
import PropTypes from 'prop-types';

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

ItemList.defaultProps = {
    onItemSelected: () => {},
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;
