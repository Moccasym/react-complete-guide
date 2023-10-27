import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //Function when an input is given and an Event is triggered with "onChange"
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return(
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>{enteredTitle}</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>{enteredAmount}</label>
                <input type='number' min='1' steps='1' onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>{enteredDate}</label>
                <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;
