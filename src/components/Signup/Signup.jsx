import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCircleExclamation } from "react-icons/fa6";
import "./Signup.scss";
import walletwise_logo from "../../assets/WalletWise.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const [emailApiError, setEmailApiError] = useState("");
  const [phoneApiError, setPhoneApiError] = useState("");
  const [apiError, setApiError] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const validatePhoneNumber = (phone) => {
    const phoneRegex1 = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;
    const phoneRegex2 = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;
    const phonetest = phoneRegex2.test(phone) || phoneRegex1.test(phone);
    return phonetest;
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.full_name) newErrors.full_name = "Please enter your name";
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!validatePhoneNumber(formData.phone_number))
      newErrors.phone_number = "Phone number is invalid";
    if (!formData.phone_number)
      newErrors.phone_number = "please enter your phone number";
    if (formData.password != formData.confirm_password)
      newErrors.confirm_password = "The passwords you entered does not match";
    if (!formData.password) newErrors.password = "Please enter your password";
    if (!formData.confirm_password)
      newErrors.confirm_password = "Please confirm your password";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailApiError("");
    setPhoneApiError("");
    setApiError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post(`${baseUrl}userauth/signup`, formData);
      if (response.data && response.status === 201) {
        localStorage.setItem("token", response.data.token);
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          password: "",
          confirm_password: "",
        });
        setErrors({});
        toast.success("Sign up successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          progress: undefined,
        });
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.type === "email")
          setEmailApiError(error.response.data.error);
        if (error.response.data.type === "phone")
          setPhoneApiError(error.response.data.error);
      } else {
        setApiError("An error occurred during sign in. Please try again later");
      }
    }
  };

  return (
    <section className="signup">
      <div className="signup__textContainer">
        <div className="signup__headingbox">
          <div className="signup__logoContainer">
            <img
              src={walletwise_logo}
              alt="wallet wise logo"
              className="signup__logo"
            />
          </div>
          <div>
            <h2 className="signup__heading">Walletwise</h2>
            <h3 className="signup__subheading">
              Financial Wisdom at Your Fingertips
            </h3>
          </div>
          <div className="signup__descriptionbox">
            <p className="signup__description">
              WalletWise simplifies the process of tracking your spending. With
              easy categorization, visual reports, and personalized budgeting
              tools, managing your money has never been easier.
            </p>
          </div>
        </div>
      </div>
      <div className="signup__formContainer">
        <div className="signup__formbox">
          <h3 className="signup__title">Sign up</h3>
          <div className="signup__textbox">
            <p className="signup__text">Already have an account?</p>
            <a href="/" className="signup__link">
              Sign in
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input__groups-row">
            <div className="input__group-lg">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                className="signup__text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
              />
              {errors.full_name && (
                <span className="error-message">
                  <FaCircleExclamation />
                  {errors.full_name}
                </span>
              )}
            </div>
          </div>

          <div className="input__groups-row">
            <div className="input__group-sm">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="signup__text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">
                  <FaCircleExclamation /> {errors.email}
                </span>
              )}
              {emailApiError && (
                <span className="error-message">
                  <FaCircleExclamation /> {emailApiError}
                </span>
              )}
            </div>
            <div className="input__group-sm">
              <label htmlFor="phone_number">Phone</label>
              <input
                type="number"
                className="signup__text"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
              {errors.phone_number && (
                <span className="error-message">
                  <FaCircleExclamation /> {errors.phone_number}
                </span>
              )}
              {phoneApiError && (
                <span className="error-message">
                  <FaCircleExclamation /> {phoneApiError}
                </span>
              )}
            </div>
          </div>

          <div className="input__groups-row">
            <div className="input__group-sm">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="signup__text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error-message">
                  <FaCircleExclamation /> {errors.password}
                </span>
              )}
            </div>

            <div className="input__group-sm">
              <label htmlFor="confirm_password">Confirm password</label>
              <input
                type="password"
                className="signup__text"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
              />
              {errors.confirm_password && (
                <span className="error-message">
                  <FaCircleExclamation /> {errors.confirm_password}
                </span>
              )}
            </div>
          </div>
          <div>
            {apiError && <span className="error-message">{apiError}</span>}
          </div>
          <div className="btn__group-lg">
            <button type="submit" className="signup__btn">
              Sign up
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signup;
