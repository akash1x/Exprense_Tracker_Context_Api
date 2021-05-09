import React, { useContext } from "react";
import { GolbalContext } from "../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(GolbalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={sign === "+" ? "plus" : "minus"}>
        {transaction.text}{" "}
        <span>
          {sign} Rs{Math.abs(transaction.amount)}{" "}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default TransactionItem;
