import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import { withSwapiService } from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {  //return a component with props.children
    return (props) => { //return a element
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const personLabelList = ({ name }) => <span>{name}</span>;
const starshipLabelList = ({ name, model }) => <span>{name} ({model})</span>;
const planetLabelList = ({ name, diameter }) => <span>{ name }</span>;


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(
    withData(withChildFunction(ItemList, personLabelList)),
    mapPersonMethodsToProps);


const PlanetList = withSwapiService(
    withData(withChildFunction(ItemList, planetLabelList)),
    mapPlanetMethodsToProps);

const StashipList = withSwapiService(
    withData(withChildFunction(ItemList, starshipLabelList)),
    mapStarshipMethodsToProps);



export {PersonList, PlanetList, StashipList};


/*


 */