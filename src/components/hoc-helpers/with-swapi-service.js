import React from 'react';

import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (View, mapMethodsToProps) => {
    return (
        (props) => {
            return (
                <SwapiServiceConsumer>
                    {
                        (swapiService) => {
                            const serviceProps = mapMethodsToProps(swapiService);

                            return (
                                <View {...props} {...serviceProps} swapiService={swapiService} />
                            )
                        }
                    }
                </SwapiServiceConsumer>
            )
        }
    );
};


export default withSwapiService;