import TransactIcon from "../TransactIcon/Transacticon";
import './TransactionCard.scss';
const TransactionCard = ({ data }) => {
  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <section className="transactionCard">
      <div className="transactionCard__row">
        <div className="transactionCard__descriptionContainer">
          <h3 className="transactionCard__description">{data.description}</h3>
        </div>
      </div>
      <div className="transactionCard__row">
        <div className="">
          <p className="transactionCard__category">{data.category}</p>
        </div>
        <div className="transactionCard__dateContainer">
          <h4 className="transactionCard__date">{formatDate(data.date)}</h4>
        </div>
      </div>
      <div className="transactionCard__row">
        <div className="transactionCard__typeContainer">
          <h3>
            <TransactIcon type={data.type} />
          </h3>
        </div>
        <div className="transactionCard__amountContainer">
          <h3 className="transactionCard__amount">${data.amount}</h3>
        </div>
      </div>
    </section>
  );
};

export default TransactionCard;