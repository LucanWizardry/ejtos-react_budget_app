import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:</span>
            <input 
                type="number" 
                step="10"
                min={Remaining}
                max="20000" 
                value={newBudget} 
                onChange={handleBudgetChange}>
            </input>
        </div>
    );
};

export default Budget;