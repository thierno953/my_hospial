import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? children : <Loading />;
};

export default PrivateRoute;
