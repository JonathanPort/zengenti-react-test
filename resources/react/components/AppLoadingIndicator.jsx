import React from 'react';
import PropTypes from 'prop-types';

export default class AppLoadingIndicator extends React.Component
{

    static propTypes() {

        return {
            loaderVisible: PropTypes.bool.isRequired,
        };

    }


    render() {

        const { loaderVisible = false } = this.props;

        if (! loaderVisible) return false;

        return (

            <div class="loader" v-if="showLoader">
                <div></div><div></div>
            </div>

        );

    }

}
