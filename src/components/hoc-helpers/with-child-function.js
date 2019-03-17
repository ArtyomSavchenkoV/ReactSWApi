import React from 'react';

const withChildFunction = (fn) => (Wrapped) => {  //return a component with props.children
    return (props) => { //return a element
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

export default withChildFunction;