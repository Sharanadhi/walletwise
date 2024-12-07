import { useState,useEffect } from 'react';
import TransactionCard from '../TransactionCard/TransactionCard';
import './TransactionList.scss'
// import transactions from '../../assets/data/data.json';


const TransactionList = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(transactions);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredData(
      transactions.filter(
        (item) =>
          item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, transactions]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const indexOfLastCard = currentPage * 12;
  const indexOfFirstCard = indexOfLastCard - 12;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  const renderCards = currentCards.map((item) => (
    <TransactionCard key={item.id} data={item} />
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / 12); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="transactionList">
      <div className="transactionList__filterbox">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="transactionList__search"
        />
      </div>
      <div className="transactionList__container">{renderCards}</div>
      <div className="transactionList__footer">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`transactionList__page ${
              number === currentPage ? "active" : ""
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TransactionList;