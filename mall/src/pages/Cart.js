// https://github.com/miniPinetree/CloneCoding---DANOSHOP/blob/main/src/pages/Cart.js
import React from "react";
import styled from "@emotion/styled/macro";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import { useHistory } from "react-router-dom";

const Line = styled.hr`
  border: solid 0.5px;
  align: center;
  width: 100%;
  margin: 0;
`;
const Line2 = styled.hr`
  border: solid 0.2px #ebebeb;
  align: center;
  width: 100%;
`;

const Btn = styled.button`
  border: 1px solid rgb(255, 111, 97);
  background-color: rgb(255, 255, 255);
  color: rgb(255, 111, 97);
  width: 170px;
  height: 45px;
  line-height: 47px;
  margin: auto;
  cursor: pointer;
  text-align: center;
  display: block;
`;

const Table = styled.table`
  border-spacing: 0;
  border: 0;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  & th {
    background: rgb(248, 248, 248);
    margin: 0;
    padding: 0;
    height: 46px;
    vertical-align: middle;
    font-weight: bold;
  }
  & td {
    border: 1px solid rgb(236, 236, 236);
    :first-of-type {
      border-left: 0px !important;
    }
    :last-of-type {
      border-right: 0px !important;
    }
  }
`;

const Cart = () => {
  const history = useHistory();

  return (
    <Grid width="1140px" margin="0 auto">
      <Grid is_flex padding="0 16px" margin="64px 0 40px">
        <Text size="24px" bold>
          결제내역
        </Text>
      </Grid>
      <Line />
      <Grid padding="100px 0" center>
        <Text size="14px">결제하신 상품이 없습니다.</Text>
      </Grid>
      <Line2 />
      <Grid width="360px" margin="45px auto" is_flex></Grid>
    </Grid>
  );
};

export default Cart;
