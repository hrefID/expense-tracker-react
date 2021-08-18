import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);

    setText('');
    setAmount(0);
  }
  return (
    <>
      <h3>Add New Transaction</h3>
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br />(negative: expense, positive: income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
