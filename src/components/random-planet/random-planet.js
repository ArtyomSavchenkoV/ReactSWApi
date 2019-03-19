import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000
    };

    static propTypes = {
        updateInterval: PropTypes.number,
    };

    constructor() {
        super();

        this.intervalId = null;
        this.swapiService = new SwapiService();
        this.state = {
            planet: {},
            loading: true,
            error: false
        };

    }

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.intervalId = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    onError = (err) => {
        console.log(`Was catch error: ${err}`);
        this.setState({
            error: true,
            loading: false
        });
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet, loading: false, error: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*80) + 3;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !error && !loading;

        const errorIndicator = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorIndicator}
            </div>
        );
    };
};

const PlanetView = ({ planet }) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt={name}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>

                </ul>
            </div>
        </React.Fragment>
    )
};