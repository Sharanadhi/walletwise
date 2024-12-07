import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CountSection from "../../components/CountSection/CountSection";
import Transactions from "../../components/Transactions/Transactions";
import TransactionList from "../../components/TransactionList/TransactionList";
import TransactionMsg from "../../components/TransactionMsg/TransactionMsg";
import Header from "../../components/Header/Header";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import "./Home.scss";
const Home = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}transactions`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        setTransactions(response.data.transactions);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/");
        }
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <section className="home">
      <Header />
      <CountSection />
      <Transactions handleClickOpen={handleClickOpen} />
      {transactions.length > 0 && (
        <TransactionList transactions={transactions} />
      )}
      {transactions.length === 0 && (
        <TransactionMsg handleClickOpen={handleClickOpen} />
      )}
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>New transaction</DialogTitle>
        <DialogContent>
          <AddTransaction handleClose={handleClose} />
        </DialogContent>
        {/* <DialogActions>
          
        </DialogActions> */}
      </Dialog>
    </section>
  );
};

export default Home;
