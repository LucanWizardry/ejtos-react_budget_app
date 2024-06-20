import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

// Expense List sets up the Expense table on the React page

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            {/* maps the expense item to the cell on the table */}
            <tbody>
                {expenses.map((expense) => (
                  <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
               ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;