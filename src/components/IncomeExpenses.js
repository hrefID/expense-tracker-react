import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // const income = transactions.map((transaction) => transaction.amount > 0 ? transaction.amount : 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  // const outcome = transactions.map((transaction) => transaction.amount < 0 ? transaction.amount : 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
  const amount = transactions.map(transactions => transactions.amount);
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const outcome = amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className="money plus">+${Math.abs(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(outcome)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
