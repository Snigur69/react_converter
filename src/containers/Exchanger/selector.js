import {createSelector} from 'reselect';

export const walletsSelector = state => state.wallets;
export const walletsNamesSelector = createSelector(walletsSelector, (items) => {
     return items.map((el) => {
        return el.ccy;
    })
})