const AddTransaction = () =>{
  
  return (
    <section className="addTransaction">
      <form action="">
        <div className="input__groups-row">
          <div className="input__group">
            <label htmlFor="">Amount</label>
            <input type="number" name="amount" id="" className=""/>
          </div>
          <div className="input__group">
            <label htmlFor="">Date</label>
            <input type="date" name="" id="" />
          </div>
        </div>
        
        <div className="input__groups-row">
          <div className="input__group">
            <label htmlFor="">Type</label>
            <select name="" id="">
              <option value="">Select type</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Investment">Investment</option>
            </select>
          </div>
          <div className="input__group">
            <label htmlFor="">Category</label>
            <select name="" id="">
              <option value="">Select category</option>
              <option value="Household">Household</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Transport">Transport</option>
              <option value="Health">Health</option>
              <option value="Salary">Salary</option>
              <option value="Other">Other</option>
            </select>
          </div>
          </div>
        
      </form>
    </section>
  );
}

export default AddTransaction;