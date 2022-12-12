import { connect } from 'react-redux'
import { showAppLoadingIndicator, hideAppLoadingIndicator } from '../actions';
import AppLoadingIndicator from '../components/AppLoadingIndicator';

const mapStateToProps = state => ({
    appLoadingIndicatorVisibility: state.appLoadingIndicatorVisibility,
})

const mapDispatchToProps = dispatch => ({
    showAppLoadingIndicator: () => dispatch(showAppLoadingIndicator),
    hideAppLoadingIndicator: () => dispatch(hideAppLoadingIndicator),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppLoadingIndicator);
