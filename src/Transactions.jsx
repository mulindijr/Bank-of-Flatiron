import React from 'react';

function Transactions({ date, description, category, amount, searchTerm }) {
  if (searchTerm && !description.toLowerCase().includes(searchTerm.toLowerCase())) {
    return null; // Hide the transaction if it doesn't match the search term
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transactions;
