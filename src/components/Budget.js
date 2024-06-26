import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget, Currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}</span>
            <input 
                type="number" 
                step="10"
                min={ExpenseTotal}
                max="20000" 
                value={newBudget} 
                onChange={handleBudgetChange}>
            </input>
        </div>
    );
};

export default Budget;