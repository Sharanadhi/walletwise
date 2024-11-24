import CountSection from "../../components/CountSection/CountSection";
import Transactions from "../../components/Transactions/Transactions";
import TransactionList from "../../components/TransactionList/TransactionList";
import './Home.scss'
const Home = () => {
  return (
    <section className="home">
      <CountSection />
      <Transactions />
      <TransactionList />
    </section>
  );
}

export default Home;