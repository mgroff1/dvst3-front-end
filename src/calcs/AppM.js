import React, { useState, useEffect } from "react";
import "./../App.css";
import MonthlyExpenseForm from "./../components/MonthlyExpenseForm";
import MonthlyExpenseList from "./../components/MonthlyExpenseList";
import Alert from "./../components/Alert";
import uuid from "uuid/v4";
import AppR from "./AppR";
 
const initialExpenses = [
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
// const initialExpenses = localStorage.getItem("expenses")
//   ? JSON.parse(localStorage.getItem("expenses"))
//   : [];
function AppM() {
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // id
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  // *********** functionality **************
  //add charge
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  // add amount
  const handleAmount = e => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      // set charge back to empty string
      setCharge("");
      // set amount back to zero
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  };
  // handle delete
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  //clear all items
  const clearItems = () => {
    setExpenses([]);
  };
  // handle edit
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
    
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        <h1>Monthly Budget Calculator</h1>
        <main className="App">
          <MonthlyExpenseForm
            handleSubmit={handleSubmit}
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            edit={edit}
          />
          <MonthlyExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </main>
        <h1>
          total spending :
          <span className="total">
            $
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
          </span>
        </h1>
      </>
  
 
  );
}

export default AppM;
