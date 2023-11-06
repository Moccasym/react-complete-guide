import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //to make the form invisible in the beginning
    const [isFormVisible, setIsFormVisible] = useState(false);

    const showFormHandler = () => {
        setIsFormVisible(true);
    };

    const hideFormHandler = () => {
        setIsFormVisible(false);
    }
    //setting up Sates for the input values
    // const[the default entered Title, the function that will read the input and set it as the new title] = useState('');
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

    const submitHandler = (event) => {
        //calling preventDefault method, so no request is send and page is not being reloaded
        event.preventDefault();
        //creating an object from the entered form input values
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        //passing the 'expenseData'-object through props to the parent component
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        hideFormHandler();
    };





    return(
    // adding onSubmit function to submit the whole form and save the input values in an object
    <div>
    {isFormVisible ? (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type='text'
                    //value to reset the input field to '' after submission 
                    value={enteredTitle}
                    //onChange calls the function below and sets a new value
                    onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                    type='number' 
                    value={enteredAmount}
                    min='1' 
                    steps='1' 
                    onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                    type='date' 
                    value={enteredDate}
                    min='2019-01-01' 
                    max='2023-12-31' 
                    onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={hideFormHandler} type='cancel'>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
    )}
    </div>
    );
};

export default ExpenseForm;
