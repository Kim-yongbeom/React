import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SigninContainer from "../containers/SigninContainer";
import { RootState } from "../types";

const Signin: React.FC = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token !== null) {
    return <Redirect to="/" />;
  }

  return <SigninContainer />;
};

export default Signin;
