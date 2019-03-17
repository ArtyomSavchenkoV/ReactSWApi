import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const withData = (View) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                data: null,
                loading: true,
                isError: false
            }
        }

        componentDidMount (){
            this.update();
        }

        componentDidUpdate(prevProps) {
            if (prevProps.getData !== this.props.getData) {
                this.update();
            }
        }

        update() {
            this.setState({loading: true, error: false});
            this.props.getData()
                .then((itemList) => {
                    this.setState({data: itemList, loading: false});
                })
                .catch((e) => {
                    console.log(`Item list throw error when tried to get elements: ${e}`);
                    this.setState({isError: true, loading: false})
                })
        }

        render(){
            const { data, loading, isError } = this.state;

            if (isError) {
                return <ErrorIndicator />
            }

            if (loading) {
                return <Spinner />
            }

            return <View {...this.props} data={data} />
        }
    }
};

export default withData;