import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {walletsRequest} from './actions';
import styles from './styles.module.css';
import Selector from '../../components/Selector';
import {walletsSelector, walletsNamesSelector} from './selector';
import {transformCodeToName, getWalletByCode} from './helper';
import {getWallets} from '../../services/api';

const Exchanger = () => {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(null); 
    const [from, setFrom] = useState('UAH');
    const [to, setTo] = useState('UAH');
    const dispatch = useDispatch();
    const wallets = useSelector(walletsSelector);
    const walletsName = useSelector(walletsNamesSelector);

    useEffect(() => {
        dispatch(walletsRequest());
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const fromOnChange = (e) => {
        setFrom(e.target.value);
    }

    const toOnChange = (e) => {
        setTo(e.target.value);
    }

    const convert = () => {
        let fromVal = getWalletByCode(wallets, from)[0].buy;
        let toVal = getWalletByCode(wallets, to)[0].buy;
        let temp = value * fromVal;
        let result = temp / toVal;
        setResult(result);
    }

    return (
        <div>
           <div className={styles.controls}>
                Exchange From <Selector onChange={fromOnChange} transform={transformCodeToName} options={walletsName} /> to <Selector onChange={toOnChange} transform={transformCodeToName} options={walletsName} />
                <br/>
                <input value={value} onChange={handleChange} type="text"/>
                <button onClick={convert}>Exchange!</button>
           </div>
           {(result !== null) ? (
           <div className={styles.result}>
                <h3>RESULT</h3>
                <h5>{value} {from} = {result} {to}</h5>
           </div>
           ) : ('')}
           
        </div>
    )
}

export default Exchanger;