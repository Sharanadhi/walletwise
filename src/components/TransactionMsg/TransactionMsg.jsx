import "./transactionMsg.scss";
const TransactionMsg = ({ handleClickOpen }) => {
  return (
    <section className="transactionMsg">
      <h2>No transactions found!</h2>
      <h3>Add your first transaction.</h3>
      <button className="primary__btn" onClick={handleClickOpen}>
        Add
      </button>
    </section>
  );
};

export default TransactionMsg;
