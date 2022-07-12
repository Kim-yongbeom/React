import React, { useCallback } from "react";
import Signin from "../components/Signin";
import { LoginReqType } from "../types";

const SigninContainer: React.FC = () => {
  const login = useCallback((reqData: LoginReqType) => {}, []);

  return <Signin login={login} />;
};

export default SigninContainer;
