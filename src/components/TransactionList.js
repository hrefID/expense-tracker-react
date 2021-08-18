import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3 className='list-title'>History</h3>
      {
        transactions.length ? (
          <ul className="list">
            {
              transactions.map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction}/>
              ))
            }
            {/* <li className="minus">
              Cash <span>-$400</span><button className='delete-btn'>X</button>
            </li>
            <li className="plus">
              Cash <span>+$400</span><button className='delete-btn'>X</button>
            </li> */}
          </ul>
        ) : (
          <h4>There are no transactions</h4>
        )
      }
    </>
  )
}

export default TransactionList
