import React, { useState } from 'react';
import "./ExpensesFilter.css";

const ExpenseFilter = ({ onChangeFilter }) => {
  const [selectedYear, setSelectedYear] = useState('');

  const yearChangeHandler = event => {
    setSelectedYear(event.target.value);
    onChangeFilter(event.target.value);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="expense-filter">
      <label>Filter by Year</label>
      <select value={selectedYear} onChange={yearChangeHandler}>
        <option value="">All</option>
        {Array.from({ length: currentYear - 1999 }, (_, index) => (
          <option key={2000 + index} value={2000 + index}>{2000 + index}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
