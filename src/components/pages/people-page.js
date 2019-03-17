import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'

import Row from '../row';
import { PersonList, PersonDetail } from '../sw-components';
import ErrorBoundry from '../error-boundry';

import './pages.css';

export default class PeoplePage extends Component {
    constructor() {
        super();

        this.swapiService = new SwapiService();
        this.state = {
            selectedItem: null,
        }
    }

    onItemSelected = (id) => {
        this.setState({selectedItem: id});
    };

    render() {
        const { selectedItem } = this.state;

        const left = (
            <PersonList
                onItemSelected={this.onItemSelected}
                selectedItem = {selectedItem}
            />
        );

        const right = (
            <ErrorBoundry>
                <PersonDetail itemId={selectedItem} />
            </ErrorBoundry>
        );

        return (
            <ErrorBoundry>
                <Row left={left} right={right} />
            </ErrorBoundry>
        )
    }
}

/*

{({name}) => name}

 */