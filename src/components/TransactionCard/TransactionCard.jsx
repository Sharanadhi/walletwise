import TransactIcon from "../TransactIcon/Transacticon";
import './TransactionCard.scss';
const TransactionCard = ({data}) => {
  console.log(data);
  return (
    <section className="transactionCard">
      <div className="transactionCard__row">
        <div className="transactionCard__descriptionContainer">
          <h3 className="transactionCard__description">{data.description}</h3>
          <p className="transactionCard__category">{data.category}</p>
        </div>
        <div className="transactionCard__dateContainer">
          <h4 className="transactionCard__date">{data.date}</h4>
        </div>
      </div>
      <div className="transactionCard__row">
        <div className="transactionCard__typeContainer">
          <h3><TransactIcon type={data.type}/></h3>
        </div>
        <div className="transactionCard__amountContainer">
          <h3 className="transactionCard__amount">${data.amount}</h3>
        </div>
      </div>
    </section>
  );
}

export default TransactionCard;