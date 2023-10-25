import React from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    return(
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Titel</label>
                <input type='text' />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='1' steps='1' />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31' />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;
