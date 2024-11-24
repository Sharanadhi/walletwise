import './Transactions.scss';
const Transactions = () =>{
  return (
    <section className="transaction">
      <div className='transaction__container'>
        <div className="transaction__header">
          <h2 className='transaction__title'>Transactions</h2>
          <p className='transaction__text'>You have 2 incomes and 23 expenses this month</p>
        </div>
        <div className='transaction__options'>
          <select name="filter__type" id="filter__type" className="transaction__filter">
            <option value="">Type</option>
            <option value="Rent">Rent</option>
            <option value="Grocery">Grocery</option>
            <option value="Travel">Travel</option>
          </select>
          <select name="filter__category" id="filter__category" className="transaction__filter">
            <option value="">Category</option>
            <option value="Home">Home</option>
            <option value="Leisure">Leisure</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <button className='transaction__btn'>Add +</button>    
        </div>
      </div>
      
    </section>
  );
}

export default Transactions