import "./transactions.scss";
import { transactions } from "../../data";

const Transactions = () => {
    const currentDate = new Date();
    
    return (
        <div className="transactions__container">
            <h1>Recent Transactions</h1>
            <div className="list__container">
                {transactions.map((transaction) => (
                    <div className="list__item" key={transaction.id}>
                        <div className="user__info">
                            <h2>{transaction.username}</h2>
                            <p>{transaction.email}</p>
                        </div>
                        <span className="date">{currentDate.toLocaleDateString()}</span>
                        <span className="amount">${transaction.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Transactions;
