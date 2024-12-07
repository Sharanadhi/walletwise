import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import "./CountSection.scss";

const CountSection = () => {
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
      }
    };
    fetchData();
  }, []);

  return (
    <section className="countSection">
      <div className="countSection__container">
        <h3 className="countSection__title-income">Income</h3>
        <h3 className="countSection__count">${totalIncome}</h3>
      </div>
      <div className="countSection__container">
        <h3 className="countSection__title-expense">Expense</h3>
        <h3 className="countSection__count">${totalExpense}</h3>
      </div>
      <div className="countSection__container">
        <h3 className="countSection__title-investment">Investment</h3>
        <h3 className="countSection__count">${totalInvestment}</h3>
      </div>
    </section>
  );
};

export default CountSection;
