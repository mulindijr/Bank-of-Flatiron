import React, { useState } from 'react';
import './TransactionForm.css'


function TransactionForm({ onAddTransaction }) {
    // State to store form data
    const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  // Handle input changes and update the form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    // Clear the form fields after submission
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div>
        {/* <label for="date">Date:</label> */}
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleInputChange}
        />
      
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
      
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleInputChange}
        />
      
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
