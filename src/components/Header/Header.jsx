import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Header.scss";
import logo from "../../assets/WalletWise.png";
import { FiLogOut } from "react-icons/fi";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    toast.success("Logging you out!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: undefined,
    });
    setTimeout(() => navigate("/"), 1000);
  };
  return (
    <>
      <header className="header">
        <div className="header__logoContainer">
          <img src={logo} alt="" className="header__logo" />
        </div>
        <div className="header__linksContainer">
          <ul className="header__links">
            <li className="header__link">
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li className="header__link">
              <a href="#">Configuration</a>
            </li>
          </ul>
          <div className="header__profileContainer">
            <a href="#" className="header__logout" onClick={logout}>
              <FiLogOut />
            </a>
          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default Header;
