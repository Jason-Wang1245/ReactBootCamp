import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, changeSelectedYear] = useState("2020");

  const selectYear = (year) => {
    changeSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter onSelectYear={selectYear} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
