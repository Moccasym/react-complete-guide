import React from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {

  const onFilterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  return (
    <div>
      <Card>
      <ExpenseFilter onFilter={onFilterChangeHandler}/>
      </Card>
      <Card className="expenses">
        {props.items.map((item, index) => (
          <ExpenseItem
            key={item.id}  // Make sure to assign a unique key for each item
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
