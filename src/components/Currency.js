import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

/* Currency component on App, Grey box */
/* used Location.js in Shopping Cart practice lab as reference */
const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='currency'>
        currency{
            <select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        }
        </div>
    );
};

export default Currency;