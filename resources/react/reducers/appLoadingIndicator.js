const appLoadingIndicator = (state = [], action) => {

    switch (action.type) {
        case 'SHOW_LOADING_INDICATOR':
            return [
                ...state,
                true,
            ];
        case 'HIDE_LOADING_INDICATOR':
            return [
                ...state,
                false,
            ];
        default:
            return state;
    }
}

export default appLoadingIndicator;
