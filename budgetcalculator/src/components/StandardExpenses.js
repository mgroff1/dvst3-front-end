

import React from 'react';

const initialRExpenses = [
  { id: uuid(), charge: "Transportation", amount: 0 },
  { id: uuid(), charge: "Food", amount: 0 },
  {
    id: uuid(),
    charge: "Health Insurance",
    amount: 0
  },
  { id: uuid(), charge: "car insurance", amount: 0 },
  { id: uuid(), charge: "health care", amount: 0 },
  { id: uuid(), charge: "car loan", amount: 0 },
  { id: uuid(), charge: "personal loan", amount: 0 },
  { id: uuid(), charge: "other", amount: 0 }
];

export default initialRExpenses;