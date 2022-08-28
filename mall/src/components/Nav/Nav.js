import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

const Base = styled.div`
  width: 100%;
  height: 7vh;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 -2px 12px 0 rgb(0 0 0 / 5%);
  color: #333333;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 7vh;
  margin: 0 4%;
`;

const Logo = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  text-decoration-line: none;
  color: #333333;
`;

const Info = styled.div`
  display: flex;
`;

const Text = styled(Link)`
  margin: 0 10px;
  text-decoration-line: none;
  color: #333333;
`;

const Interval = styled.div`
  color: #dddddd;
  font-size: 14px;
  cursor: default;
`;

function Nav() {
  return (
    <Base>
      <Container>
        <Logo to="/">INFOFLA</Logo>
        <Info>
          <Text to="/login">로그인</Text>
          <Interval>|</Interval>
          <Text to="/register">회원가입</Text>
        </Info>
      </Container>
    </Base>
  );
}

export default Nav;
