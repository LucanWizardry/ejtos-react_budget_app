
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

/* Spent So Far component on App, Blue box */
const Currency = () => {
    const { currency } = useContext(AppContext);
    return (
        <div className='currency'>
            <select name="currency" id="currency">
                <option value="UK">£ Pound</option>
                <option value="US">$ Dollar</option>
                <option value="EU">€ Euro</option>
                <option value="IN">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;