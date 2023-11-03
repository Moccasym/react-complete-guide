import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const onFilterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilter={onFilterChangeHandler}/>
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
