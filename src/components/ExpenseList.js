import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({ rexpenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {rexpenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {rexpenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
