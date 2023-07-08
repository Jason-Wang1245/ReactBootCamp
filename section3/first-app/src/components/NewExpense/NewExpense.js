import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, updateIsEditing] = useState(false);

  const isEditingHandlerTrue = () => {
    updateIsEditing(true);
  };

  const isEditingHandlerFalse = () => {
    updateIsEditing(false);
  };

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={isEditingHandlerTrue}>Add Expense</button>}
      {isEditing && <ExpenseForm onCancelEditing={isEditingHandlerFalse} onSaveExpenseData={saveExpenseDateHandler} />}
    </div>
  );
};

export default NewExpense;
