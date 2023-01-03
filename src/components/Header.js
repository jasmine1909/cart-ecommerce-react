import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from ".././assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FaUserAlt, FaYCombinator } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "../redux/slice/authSlice";
import { ShowOnLogin, ShowOnLogout } from "./HiddenLink";

const Cart = (
  <span className="cart">
    <Link to="/cart">
      Cart
      <AiOutlineShoppingCart size={20} />
      <p> 0</p>
    </Link>
  </span>
);
const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const navigate = useNavigate();

  const logoutUser = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Log out successful");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  /// check if user is logged in

  const [uName, setUName] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // const uid = user.uid;

        //when user not log in with google
        if (user.displayName == null) {
          //remove last 10 character @gmail.com
          const ul = user.email.substring(0, user.email.indexOf("@"));
          const displayUName = ul.charAt(0).toUpperCase() + ul.slice(1);
          setUName(displayUName);
        } else {
          setUName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : uName,
            userID: user.uid,
          })
        );
      } else {
        setUName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, uName]);

  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <nav className={showMenu ? "show-nav" : "hide-nav"}>
          <div
            className={
              showMenu ? "nav-wrapper show-nav-wrapper" : "nav-wrapper"
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
          <div className="header-right" onClick={hideMenu}>
            <span className="links">
              <ShowOnLogout>
                <NavLink to="/login" className="activeLink">
                  Login
                </NavLink>
              </ShowOnLogout>
              <ShowOnLogin>
                <Link>
                  <FaUserAlt />
                  <span className="name"> Hi, {uName}</span>
                </Link>
              </ShowOnLogin>

              <ShowOnLogin>
                {" "}
                <NavLink to="/" onClick={logoutUser}>
                  Log out
                </NavLink>
              </ShowOnLogin>
            </span>
            <span className="cart">
              <Link to="/cart">
                Cart
                <AiOutlineShoppingCart size={20} />
                <p> {cartItems.length}</p>
              </Link>
            </span>
          </div>
        </nav>

        <div className="menu-icon">
          {/* {Cart} */}
          <span className="cart">
            <Link to="/cart">
              <AiOutlineShoppingCart size={20} />
              <p> {cartItems.length}</p>
            </Link>
          </span>
          <HiMenuAlt3 size={30} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
