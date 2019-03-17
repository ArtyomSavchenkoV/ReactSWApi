import React from 'react';

import { withSwapiService } from '../hoc-helpers';

import { detailsDataWrapper } from '../hoc-helpers';

import ItemDetails, { Record, EmptyCard, CardFrame } from '../item-details/item-details';


const PersonDetail = ({itemId, getData}) => {
    const DDW = detailsDataWrapper(ItemDetails, CardFrame, EmptyCard, getData);
    return(
        <DDW itemId={itemId} emptyLabel="Please select a character:">
            <Record field="gender" label="Gender:"/>
            <Record field="birthYear" label="Birth year:"/>
            <Record field="eyeColor" label="Eye color:"/>
        </DDW>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetail);

/*
https://starwars-visualguide.com/assets/img/characters/2.jpg

 */