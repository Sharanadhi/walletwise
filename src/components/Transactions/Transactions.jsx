import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddTransaction from "../AddTransaction/AddTransaction";
import "./Transactions.scss";

const Transactions = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <section className="transaction">
      <div className="transaction__container">
        <div className="transaction__header">
          <h2 className="transaction__title">Transactions</h2>
          <p className="transaction__text">
            You have 2 incomes and 23 expenses this month
          </p>
        </div>
        <div className="transaction__options">
          <select
            name="filter__type"
            id="filter__type"
            className="transaction__filter"
          >
            <option value="">Type</option>
            <option value="Rent">Rent</option>
            <option value="Grocery">Grocery</option>
            <option value="Travel">Travel</option>
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

      <Dialog fullWidth={true} maxWidth={"lg"} open={open} onClose={handleClose}>
        <DialogTitle>New transaction</DialogTitle>
        <DialogContent>
          <h2 className="transaction__amount">$0.00</h2>
          <AddTransaction />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="transaction__btn cancel__btn">Cancel</button>
          <button type="submit" className="transaction__btn">Add</button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Transactions;
