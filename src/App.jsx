import React, { useEffect, useState } from 'react';
import './App.css';
import Transactions from './Transactions';

function App() {
  // State to store transaction data
  const [data, setData] = useState([]);
  
  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((res) => res.json())
      .then((transactions) => {
        setData(transactions);
      });
  }, []);

  return (
    <div>
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
