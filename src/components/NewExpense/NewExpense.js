import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onNewExpense(expenseData);
    };
    return(
    <div className="new-expense">
        {/* adding prob to Expenseform to extract the form-data from ExpenseForm */}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );

};
export default NewExpense;