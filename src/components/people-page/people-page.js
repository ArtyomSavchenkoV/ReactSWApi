import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'

import { PersonList } from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PersonDetail } from '../sw-components';
import './people-page.css';


export default class PeoplePage extends Component {
    constructor() {
        super();

        this.swapiService = new SwapiService();
        this.state = {
            selectedItemOfList: null,
        }
    }

    onItemSelected = (id) => {
        this.setState({selectedItemOfList: id});
    };

    render() {
        const { selectedItemOfList } = this.state;

        const left = (
            <PersonList
                onItemSelected={this.onItemSelected}
                selectedItemOfList = {selectedItemOfList}
            />
        );


        const right = (
            <ErrorBoundry>
                <PersonDetail itemId={selectedItemOfList} />
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