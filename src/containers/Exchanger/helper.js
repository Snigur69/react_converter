export const transformCodeToName = (code) => {
    switch(code) {
        case 'UAH': {
            return 'Українська гривня';
        }
        case 'EUR': {
            return 'Евро';
        }
        case 'RUR': {
            return 'Российский рубль';
        }
        case 'USD': {
            return 'Американский доллар';
        }
        case 'BTC': {
            return 'Биткоин';
        }
        default: {
            return 'Invalid code';
        }
    }
}

export const getWalletByCode = (wallet, code) => {
    return wallet.filter((el) => {
        if(el.ccy === code) {
            return el;
        }
    })
} 