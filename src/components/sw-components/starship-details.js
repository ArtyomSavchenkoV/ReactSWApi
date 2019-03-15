import React from 'react';

import { withSwapiService } from '../hoc-helpers';

import { detailsDataWrapper } from '../hoc-helpers';

import ItemDetails, { Record, EmptyCard, CardFrame } from '../item-details/item-details';


const StarshipDetail = ({itemId, getData}) => {
    const DDW = detailsDataWrapper(ItemDetails, CardFrame, EmptyCard, getData);
    return (
        <DDW itemId={itemId} emptyLabel="Please select a star ship:">
            <Record field="model" label="Model:"/>
            <Record field="manufacturer" label="Manufacturer:"/>
            <Record field="costInCredits" label="Cost in credits:"/>
            <Record field="length" label="Length:"/>
            <Record field="crew" label="Crew:"/>
            <Record field="passengers" label="Passengers:"/>
            <Record field="cargoCapacity" label="Cargo capacity:"/>
        </DDW>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship
    }
};

export default withSwapiService(StarshipDetail, mapMethodsToProps);

/*



 */