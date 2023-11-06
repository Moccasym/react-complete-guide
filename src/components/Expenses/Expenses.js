import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const onFilterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    filterExpenses(selectedYear);
    
  };

  const filterExpenses = (year) => {
    const filtered = props.items.filter((expense) => {
      const expenseYear = expense.date.getFullYear().toString();
      if (expenseYear === year){
        return year;
      } else if (year === 'all') {
        return year;
      } else {
        return 0;
      }
    });
    setFilteredExpenses(filtered);
  };


  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilter={onFilterChangeHandler}/>
        {filterExpenses.length === 0 ? (<p>No Expenses found.</p>) : (
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}  // Make sure to assign a unique key for each item
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )}
        
      </Card>
    </div>
  );
}

export default Expenses;
