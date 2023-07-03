import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, changeSelectedYear] = useState("2020");

  const selectYear = (year) => {
    changeSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onSelectYear={selectYear} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
