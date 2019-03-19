import React from 'react';
import { withRouter } from 'react-router-dom'

import Row from '../row';
import { PersonList, PersonDetail } from '../sw-components';
import ErrorBoundry from '../error-boundry';

import './pages.css';

const PeoplePage = ({ match, history }) => {

    const itemId = match.params.id;

    const left = (
        <PersonList
            onItemSelected={(id) => {
                history.push(id);
            }}
            selectedItem = {itemId}
        />
    );

    const right = (
        <ErrorBoundry>
            <PersonDetail itemId={itemId} />
        </ErrorBoundry>
    );

    return (
        <ErrorBoundry>
            <Row left={left} right={right} />
        </ErrorBoundry>
    )

};


export default withRouter(PeoplePage);
/*

{({name}) => name}

 */