import axios from 'axios';

export const getWallets = async () => {
    return  await axios({
        method: 'get',
        url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR07BCrAIGgMrUH86KRcjlLPV_yco0AB-9CLCqQIXrNsDXyclRNCyFGovM0',
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        throw new Error(error);
    })
}