import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const withData = (View) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                data: null,
                loading: false,
                isError: false
            }
        }

        componentDidMount (){
            console.log(
                'props = ', this.props);
            this.props.getData()
                .then((itemList) => {
                    this.setState({data: itemList});
                })
                .catch((e) => {
                    console.log(`Item list throw error when tried to get elements: ${e}`);
                    this.setState({isError: true})
                })
        }

        render(){
            if (this.state.isError) {
                return <ErrorIndicator />
            }

            const { data } = this.state;
            if (!data) {
                return <Spinner />
            }

            return <View {...this.props} data={data} />
        }
    }
};

export default withData;