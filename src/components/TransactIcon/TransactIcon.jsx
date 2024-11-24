import { FiArrowDownLeft, FiArrowUpRight, FiArrowUp } from 'react-icons/fi';
import './TransactIcon.scss'
const TransactIcon = ({ type }) => {
  if (type === "Income") {
    return <FiArrowUpRight className='bg-green'/>;
  } else if (type === "Expense") {
    return <FiArrowDownLeft className='bg-red'/>;
  } else if (type === "Investment") {
    return <FiArrowUp className='bg-blue'/>;
  } else {
    return null;
  }
};

export default TransactIcon;