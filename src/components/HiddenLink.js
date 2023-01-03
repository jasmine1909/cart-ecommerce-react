import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/slice/authSlice";
export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //if log in is
  if (isLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //if log in is
  if (!isLoggedIn) {
    return children;
  }
  return null;
};
