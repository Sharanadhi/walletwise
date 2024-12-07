import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios";
import handleApiError from "../../utils/errorHandler";
import { useNavigate } from "react-router-dom";
import { FaCircleExclamation } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Signup/Signup.scss";
import walletwise_logo from "../../assets/WalletWise.png";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [emailApiError, setEmailApiError] = useState("");
  const [passwordApiError, setPasswordApiError] = useState("");
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.password) newErrors.password = "Please enter your password";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailApiError("");
    setPasswordApiError("");
    setApiError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
       const response = await axiosInstance.post(
         `${import.meta.env.VITE_API_URL}userauth/signin`,
         formData
       );
      localStorage.setItem("token", response.data.token);
      setFormData({ email: "", password: "" });
      setErrors({});
      toast.success("Sign-in successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        progress: undefined,
      });
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      const errorMessage = handleApiError(error);
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.type === "email") {
          setEmailApiError(error.response.data.error);
        } else if (error.response.data.type === "password") {
          setPasswordApiError(error.response.data.error);
        }
        else {
          setApiError(errorMessage);
        }
      } else {
        setApiError("An error occurred during sign in. Please try again later");
      }
    }
  };

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("token");
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [navigate]);

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
          <h3 className="signup__title">Sign in</h3>
          <div className="signup__textbox">
            <p className="signup__text">Don&apos;t have an account?</p>
            <a href="/signup" className="signup__link">
              Sign up
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input__groups-row">
            <div className="input__group-lg">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="signup__text"
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
          </div>

          <div className="input__groups-row">
            <div className="input__group-lg">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="signup__text"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error-message">
                  <FaCircleExclamation /> {errors.password}
                </span>
              )}
              {passwordApiError && (
                <span className="error-message">
                  <FaCircleExclamation /> {passwordApiError}
                </span>
              )}
            </div>
          </div>
          <div>
            {apiError && (
              <span className="error-message">
                <FaCircleExclamation /> {apiError}
              </span>
            )}
          </div>
          <div className="btn__group-lg">
            <button type="submit" className="signup__btn">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signin;
