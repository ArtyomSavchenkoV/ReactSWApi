import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from '../../services/swapi-service';
import StubSwapiService from '../../services/stub-svapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, StarshipPage, PlanetPage } from '../pages';
import ErrorIndicator from '../error-indicator';

import { StarshipDetail } from '../sw-components';

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
                <Router>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet updateInterval={20000}/>

                        <Switch>
                            <Route
                                path='/'
                                exact
                                render={() => <h2>Welcome to star DB</h2>}
                            />
                            <Route
                                path='/people/:id?'
                                component={PeoplePage}
                            />
                            <Route
                                path='/planets'
                                component={PlanetPage}
                            />
                            <Route
                                path='/starships'
                                exact
                                component={StarshipPage}
                            />
                            <Route
                                path='/starships/:id'
                                component={({ match }) => {
                                    return <StarshipDetail itemId={match.params.id}/>;
                                }}
                            />
                            <Route
                                render={() => <h2>404 - page not found.</h2>}
                            />
                        </Switch>

                    </div>
                </Router>
            </SwapiServiceProvider>
        )
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }
};
