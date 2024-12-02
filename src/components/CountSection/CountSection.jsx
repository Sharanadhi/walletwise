import './CountSection.scss';

const CountSection = () => {
  return (
    <section className="countSection">
      <div className='countSection__container'>
        <h3 className='countSection__title-income'>Income</h3>
        <p className='countSection__count'>$10,000</p>
      </div>
      <div className='countSection__container'>
        <h3 className='countSection__title-expense'>Expense</h3>
        <p className='countSection__count'>$4,300</p>
      </div>
      <div className='countSection__container'>
        <h3 className='countSection__title-investment'>Investment</h3>
        <p className='countSection__count'>$2,000</p>
      </div>
      {/* <div className='countSection__graphcontainer'></div> */}
    </section>
  );
}

export default CountSection;

