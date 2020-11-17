import {WALLETS_REQUEST, WALLETS_SUCCESS} from './contstans';

export const walletsRequest = () => {
    return {
        type: WALLETS_REQUEST
    }
}

export const walletsSuccess = (wallets) => {
    return {
        type: WALLETS_SUCCESS,
        wallets
    }
}