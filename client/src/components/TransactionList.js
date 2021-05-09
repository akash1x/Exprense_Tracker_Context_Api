import React, { useContext } from "react";
import { GolbalContext } from "../context/GlobalState";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions } = useContext(GolbalContext);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
