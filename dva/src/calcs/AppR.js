import React, { useState, useEffect } from "react";
import "./../App.css";
import ExpenseForm from "./../components/ExpenseForm";
import ExpenseList from "./../components/ExpenseList";
import Alert from "./../components/Alert";
import uuid from "uuid/v4";


const initialRExpenses = [
  { id: uuid(), charge: "hotel costs", amount: 0 },
  { id: uuid(), charge: "rental deposit", amount: 0 },
  {
    id: uuid(),
    charge: "utility fees",
    amount: 0
  },
  { id: uuid(), charge: "storage unit", amount: 0 },
  { id: uuid(), charge: "monthly rent", amount: 0 },
  { id: uuid(), charge: "cell phone fees", amount: 0 },
  { id: uuid(), charge: "moving truck expenses", amount: 0 },
  { id: uuid(), charge: "loss of income", amount: 0 },
  { id: uuid(), charge: "security measures", amount: 0 },
  { id: uuid(), charge: "mental health", amount: 0 }
];

function App() {
  // all expenses, add expense
  const [rexpenses, setExpenses] = useState(initialRExpenses);
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

    localStorage.setItem("rexpenses", JSON.stringify(rexpenses));
  }, [rexpenses]);
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
        let tempExpenses = rexpenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...rexpenses, singleExpense]);
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
    let tempExpenses = rexpenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  //clear all items
  const clearItems = () => {
    setExpenses([]);
  };
  // handle edit
  const handleEdit = id => {
    let expense = rexpenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Relocate Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          rexpenses={rexpenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        total spending :
        <span className="total">
          $
          {rexpenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
