import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList as ItemList} from '../sw-components';
import ErrorBoundry from '../error-boundry';

import './pages.css';

const StarshipsPage = ({ history }) => {
    return (
        <ErrorBoundry>
            <ItemList onItemSelected={(id)=>{
                history.push(id)
            }} />
        </ErrorBoundry>
    )
};

export default withRouter(StarshipsPage);