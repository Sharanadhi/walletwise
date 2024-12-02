import "./Transactions.scss";

const Transactions = ({ handleClickOpen }) => {
  return (
    <section className="transaction">
      <div className="transaction__container">
        <div className="transaction__header">
          <h2 className="transaction__title">Transactions</h2>
          <p className="transaction__text">
            You have 0 incomes and 0 expenses this month
          </p>
        </div>
        <div className="transaction__options">
          <select
            name="filter__type"
            id="filter__type"
            className="transaction__filter"
          >
            <option value="">Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
            <option value="Investment">Investment</option>
          </select>
          <select
            name="filter__category"
            id="filter__category"
            className="transaction__filter"
          >
            <option value="">Category</option>
            <option value="Home">Home</option>
            <option value="Leisure">Leisure</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Salary">Salary</option>
            <option value="Other">Other</option>
          </select>
          <button className="transaction__btn" onClick={handleClickOpen}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
