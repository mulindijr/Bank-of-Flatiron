import React, { useEffect, useState } from 'react';
import './App.css';
import Transactions from './Transactions';
import TransactionForm from './TransactionForm';

function App() {
  // State to store transaction data
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((res) => res.json())
      .then((transactions) => {
        setData(transactions);
      });
  }, []);

  const addTransaction = (newTransaction) => {
    // Make a POST request to the server to add the new transaction
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
    .then((res) => res.json())
    .then((addedTransaction) => {
      // Update the state with the added transaction from the server
      setData([...data, addedTransaction]);
    })
    .catch((error) => {
      console.error('Error adding transaction:', error);
    });
  };

  return (
    <div>
      <h1 className='title'>The Royal Bank of Flatiron</h1>
      {/* search input field for filtering transactions by description */}
      <input
        className='search-bar'
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionForm onAddTransaction={addTransaction} />

      {/* Table for displaying transactions */}
      <table className='transaction-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            // Render each transaction using the Transactions component
            <Transactions
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              amount={transaction.amount}
              searchTerm={searchTerm} 
              key={transaction.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
