import React, { useState } from 'react';
import "./AddExpenses.css";

const AddExpenseForm = ({ onAddExpense }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const currentDate = new Date().toISOString().split('T')[0];

  const openFormHandler = () => {
    setIsAdding(true);
  };

  const cancelHandler = () => {
    setIsAdding(false);
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    };

    onAddExpense(expenseData);

    clearForm();
    setIsAdding(false);
  };

  return (
    <div className="card add-expense">
      {!isAdding && (
        <button onClick={openFormHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <div className="form-control">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={event => setAmount(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <label>Date</label>
              <input
                type="date"
                min="2000-01-01"
                max={currentDate}
                value={date}
                onChange={event => setDate(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="button" onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddExpenseForm;
