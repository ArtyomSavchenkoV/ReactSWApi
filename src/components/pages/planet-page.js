import React, { Component } from 'react';

import Row from '../row';
import { PlanetList as ItemList, PlanetDetail as ItemDetails } from '../sw-components';
import ErrorBoundry from '../error-boundry';

import './pages.css';

export default class extends Component{
    constructor() {
        super();

        this.state = {
            selectedItem: false,
            error: false
        }
    }

    onItemSelected = (id) => {
        this.setState({ selectedItem: id })
    };

    render() {
        const { selectedItem } = this.state;

        return (
            <ErrorBoundry>
                <Row
                    left={<ItemList onItemSelected={this.onItemSelected} selectedItem={selectedItem}/>}
                    right={<ErrorBoundry><ItemDetails itemId={selectedItem} /></ErrorBoundry>}
                />
            </ErrorBoundry>
        )
    }
}