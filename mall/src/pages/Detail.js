import React from "react";
import styled from "@emotion/styled/macro";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import TextWrapper from "../elements/TextWrapper";

const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  align: center;
  width: 92%;
`;

const H = styled.span`
  color: #ff6f61;
  font-weight: 800;
`;

const Detail = () => {
  return (
    <>
      <Grid padding="60px 0 0 0" max_width="950px" margin="0 auto">
        <div style={{ alignItems: "flex-start", display: "flex" }}>
          <Image
            height="406px"
            src="https://img.hankyung.com/photo/202109/99.26479073.1.jpg"
          />
          <Grid>
            <Grid is_flex>
              <TextWrapper />
            </Grid>
            <Line />
            <Grid is_flex padding="6px 16px">
              <Grid width="auto">
                <Text size="13px" margin="0" bold width="auto">
                  배송정보
                </Text>
              </Grid>
              <Grid width="82%" padding="0 0 0 15px">
                <Text size="13px" bold margin="0">
                  <H>로그인</H> 시 적립 혜택 제공
                </Text>
              </Grid>
            </Grid>
            <Line />
            <Grid is_flex padding="6px 16px">
              <Grid width="auto">
                <Text size="13px" margin="0" bold width="auto">
                  상품정보
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default Detail;
