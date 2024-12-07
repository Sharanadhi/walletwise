import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import handleApiError from "../../utils/errorHandler";
import "./Transactions.scss";

const Transactions = ({ handleClickOpen }) => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalInvestment, setTotalInvestemnt] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}transactions/counts`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        response.data.income
          ? setTotalIncome(response.data.income)
          : setTotalIncome("0.00");
        response.data.expense
          ? setTotalExpense(response.data.expense)
          : setTotalExpense("0.00");
        response.data.investment
          ? setTotalInvestemnt(response.data.investment)
          : setTotalInvestemnt("0.00");
      } catch (error) {
        console.log(error);
        handleApiError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="transaction">
      <div className="transaction__container">
        <div className="transaction__header">
          <h2 className="transaction__title">Transactions</h2>
          <p className="transaction__text">
            You have {totalIncome} income(s), {totalExpense} expense(s) and{" "}
            {totalInvestment} investment(s) this month.
          </p>
        </div>
        <div className="transaction__options">
          <button className="transaction__btn" onClick={handleClickOpen}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
