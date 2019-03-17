import React, {Component} from 'react';

import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from '../../services/swapi-service';
import StubSwapiService from '../../services/stub-svapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, StarshipPage, PlanetPage } from '../pages';
import ErrorIndicator from '../error-indicator';


import './app.css';

export default class App extends Component{
    constructor() {
        super();
        this.state = {
            swapiService: new SwapiService(),
            hasError: false
        }
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                StubSwapiService :
                SwapiService;
            return {
                swapiService: new Service()
            }
        })
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <div className="stardb-app">
                    <Header onServiceChange={this.onServiceChange}/>
                    <RandomPlanet updateInterval={'7000'}/>

                    <PeoplePage />
                    <StarshipPage />
                    <PlanetPage />

                </div>
            </SwapiServiceProvider>
        )
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }
};

/*


 */