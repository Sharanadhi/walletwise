import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import handleApiError from "../../utils/errorHandler";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCircleExclamation } from "react-icons/fa6";

const AddTransaction = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    type: "",
    category: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.amount) newErrors.amount = "Please enter the amount";
    if (!formData.date) newErrors.date = "Please enter the date";
    if (!formData.type) newErrors.type = "please enter transaction type";
    if (!formData.category)
      newErrors.category = "Please enter transaction category";
    if (!formData.description)
      newErrors.description = "Please confirm the description";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    const token = localStorage.getItem("token");
    const validationErrors = validate();
    if (!token) {
      localStorage.removeItem("token");
      navigate("/");
      return;
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}transactions`,
        {
          amount: formData.amount,
          date: formData.date,
          type: formData.type,
          category: formData.category,
          description: formData.description,
        },
        { headers: { authorization: `Bearer ${token}` } }
      );
      if (response.data && response.status === 201) {
        setFormData({
          amount: "",
          date: "",
          type: "",
          category: "",
          description: "",
        });
        setErrors({});
        toast.success("Transaction added", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          progress: undefined,
        });
        setTimeout(() => navigate(0), 1000);
      }
    } catch (error) {
      const errorMessage = handleApiError(error);
      setApiError(errorMessage);
      if (
        (error.response && error.response.status === 401) ||
        error.response.status === 403
      ) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  };

  return (
    <section className="addTransaction">
      <form onSubmit={handleSubmit}>
        <div className="input__groups-row">
          <div className="input__group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            {errors.amount && (
              <span className="error-message">
                <FaCircleExclamation className="error-icon" />
                {errors.amount}
              </span>
            )}
          </div>
          <div className="input__group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && (
              <span className="error-message">
                <FaCircleExclamation className="error-icon" />
                {errors.date}
              </span>
            )}
          </div>
        </div>

        <div className="input__groups-row">
          <div className="input__group">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select type</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Investment">Investment</option>
            </select>
            {errors.type && (
              <span className="error-message">
                <FaCircleExclamation className="error-icon" />
                {errors.type}
              </span>
            )}
          </div>
          <div className="input__group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              <option value="Household">Household</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Transport">Transport</option>
              <option value="Health">Health</option>
              <option value="Salary">Salary</option>
              <option value="Other">Other</option>
            </select>
            {errors.category && (
              <span className="error-message">
                <FaCircleExclamation className="error-icon" />
                {errors.category}
              </span>
            )}
          </div>
        </div>
        <div className="input__groups-row">
          <div className="input__group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <span className="error-message">
                <FaCircleExclamation className="error-icon" />
                {errors.description}
              </span>
            )}
          </div>
        </div>
        <div className="input__groups-row">
          {apiError && <span className="error-message">{apiError}</span>}
        </div>
        <div className="btn__group">
          <button onClick={handleClose} className="cancel__btn">
            Cancel
          </button>
          <button type="submit" className="primary__btn">
            Add
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default AddTransaction;
