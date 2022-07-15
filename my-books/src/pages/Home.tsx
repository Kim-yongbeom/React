import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import { RootState } from "../types";

const Home: React.FC = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token === null) {
    return <Redirect to="/signin" />;
  }

  return <ListContainer />;
};

export default Home;
