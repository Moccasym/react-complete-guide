import React from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
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
  );
}

export default Expenses;
