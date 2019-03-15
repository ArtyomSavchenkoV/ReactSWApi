import React from 'react';

import ErrorButton from '../error-button';

import './item-details.css';


const CardFrame = ({children}) => {
    return (
        <div className="person-details card">
            {children}
        </div>
    )
}


const EmptyCard = ({ label }) => {
    return (
        <div className="card-body">
            <h4>{label}</h4>
        </div>
    )
};

const ItemCard = ({itemData, children: records}) => {
    const {name, image} = itemData;
    //console.log(records);

    return (
        <React.Fragment>
            <img className="person-image"
                 src={image}
                 alt={name}/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">

                    {
                        React.Children.map(records, (record) => {
                            return React.cloneElement(record, {item: itemData})
                        })
                    }

                </ul>

                <ErrorButton />
            </div>
        </React.Fragment>
    )
};


const Record = ({item, field, label}) => {
    return (
            <li className="list-group-item">
                <span className="term">{label}</span>
                <span>{item[field]}</span>
            </li>
        );
};

export {Record, EmptyCard, CardFrame};
export default ItemCard;
/*



 */