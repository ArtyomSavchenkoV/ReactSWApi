import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const detailsDataWrapper = (View, CardFrame, EmptyCard, getData) => {
    return class extends Component {

        constructor() {
            super();
            this.state = {
                loading: true,
                itemData: null,
                error: false
            };
        }

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps) {
            if (prevProps.itemId !== this.props.itemId ||
            prevProps.getData !== this.props.getData) {
                this.setState(() => {
                    return {loading: true,
                        itemData: null,
                        error: false}
                });
                this.updateItem();
            }
        }

        updateItem() {
            const { itemId } = this.props;
            if (!itemId) {
                return;
            }

            getData(itemId)
                .then((itemData) => {
                    this.setState(() => {
                        return {itemData, loading: false, error: false}
                    })
                })
                .catch(() => {
                    this.setState(() => {
                        return {error: true, loading: false}
                    })
                });
        }



        render(){
            const { loading, itemData, error } = this.state;
            const { itemId, emptyLabel } = this.props;

            let content;
            switch (true) {
                case !itemId:
                    content = <EmptyCard label={emptyLabel}/>;
                    break;
                case error:
                    content = <ErrorIndicator />;
                    break;
                case loading:
                    content = <Spinner />;
                    break;
                default:
                    content = <View {...this.props} itemData={itemData} />
            }
            return <CardFrame>{content}</CardFrame>
        }
    }
};

export default detailsDataWrapper;
