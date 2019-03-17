import React from 'react';

import { withSwapiService } from '../hoc-helpers';

import { detailsDataWrapper } from '../hoc-helpers';

import ItemDetails, { Record, EmptyCard, CardFrame } from '../item-details/item-details';


const PlanetDetail = ({itemId, getData}) => {
    const DDW = detailsDataWrapper(ItemDetails, CardFrame, EmptyCard, getData);
    return (
        <DDW itemId={itemId} emptyLabel="Please select a planet:">
            <Record field="population" label="Population:"/>
            <Record field="rotationPeriod" label="Rotation period:"/>
            <Record field="diameter" label="Diameter:"/>
        </DDW>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet
    }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetail);

/*



 */