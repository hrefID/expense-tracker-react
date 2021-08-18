import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <>
      <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
        {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>X</button>
      </li>
    </>
  )
}

export default Transaction
