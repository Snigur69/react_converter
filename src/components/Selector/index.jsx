import React from 'react';


const Selector = ({onChange, transform, options}) => {
    return(
        <>
        <select onChange={onChange} name="" id="">
            {options.map((el, index) => {
                return <option key={index} value={el} >{transform(el)}</option>
            })}
        </select>
        </>
    )
}

export default Selector;