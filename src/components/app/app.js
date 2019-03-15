import React, {Component} from 'react';

import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';

import Row from '../row';

import {  PersonDetail, PlanetDetail, StarshipDetail,
    PersonList, PlanetList, StashipList } from '../sw-components';

import './app.css';

export default class App extends Component{

    constructor() {
        super();

        this.swapiService = new SwapiService();

        this.state = {
            selectedItemOfList: null,
            isVisibleRandomPlanet: true,
            hasError: false
        }
    }

    toggleVisibleRandomPlanet = () => {
        this.setState(( {isVisibleRandomPlanet }) => {
            console.log(`isVisibleRandomPlanet = ${!isVisibleRandomPlanet}`);
            return {isVisibleRandomPlanet: !isVisibleRandomPlanet};
        })
    };

    onItemSelected = (id) => {
        this.setState({selectedItemOfList: id});
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const { isVisibleRandomPlanet } = this.state;
        const { selectedItemOfList } = this.state;

        const showRandomPlanet = isVisibleRandomPlanet ? <RandomPlanet /> : null;


        const itemListS = (
            <StashipList
                onItemSelected={this.onItemSelected}
                selectedItemOfList = {selectedItemOfList}
            >
                {(i) => (`${i.name}`)}
            </StashipList>
        );

        const itemDetailsS = (
                <StarshipDetail itemId={12} />
        );

        const itemListP = (
            <PlanetList
                onItemSelected={this.onItemSelected}
                selectedItemOfList = {selectedItemOfList}
            >
                {(i) => (`${i.name}`)}
            </PlanetList>
        );

        const itemDetailsP = (
            <PlanetDetail itemId={4} />
        );

        const Planet = () => {
            return (
                <Row left={itemListP} right={itemDetailsP}/>
            )
        };

        const StarShips = () => {
            return (
                <Row left={itemListS} right={itemDetailsS}/>
            )
        };

        return (
            <SwapiServiceProvider value={this.swapiService}>
                <div className="stardb-app">
                    <Header />
                    {showRandomPlanet}
                    <a href="#/" onClick={this.toggleVisibleRandomPlanet}>
                        Hide/Show random planet block
                    </a>

                    <PeoplePage />
                    <Planet />
                    <StarShips />

                </div>
            </SwapiServiceProvider>
        )
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }
};

/*
<Row left={itemList} right={itemDetails} />




 */