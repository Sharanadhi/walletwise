import CountSection from "../../components/CountSection/CountSection";
import Transactions from "../../components/Transactions/Transactions";
import TransactionList from "../../components/TransactionList/TransactionList";
import Header from "../../components/Header/Header";
import './Home.scss'
const Home = () => {
  return (
    <section className="home">
      <Header />
      <CountSection />
      <Transactions />
      <TransactionList />
    </section>
  );
}

export default Home;