import React from "react";
import { AiFillSnippets } from "react-icons/ai";


const MonthlyExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">Expense Item</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder=" add item"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder=" $"
            value={amount}
             onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        {/* submit  */}
        <AiFillSnippets className="btn-icon" />
      </button>
    </form>
  );
};

export default MonthlyExpenseForm;
