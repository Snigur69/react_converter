let initialState = [{
    'ccy':"UAH",
    'base_ccy': "UAH",
    'buy': "1",
    'sale': "1"
}];

export const exchangerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "WALLETS_SUCCESS": {
            return [
                ...state,
                ...action.wallets
            ]
            
        }
        default: {
            return state;
        }
    }
}