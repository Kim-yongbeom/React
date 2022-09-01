import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Nav from "../components/Nav/Nav";

const Base = styled("div")({
  backgroundColor: "#f5f5f5",
  height: "100%",
});

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const Box = styled("div")({
  display: "inline-block",
  margin: "30px",
  width: "250px",
  height: "150px",
  backgroundColor: "#fff",
  boxShadow: "1px 1px 1px 1px #ccc",
  borderRadius: "10px",
});

const Title = styled("div")({
  padding: "10px 30px",
  textAlign: "center",
});

const Score = styled("div")({
  fontSize: "50px",
  fontWeight: "bold",
  textAlign: "center",
});

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "cover",
});

const Section = styled("div")({
  height: "50px",
  backgroundColor: "#fff",
  boxShadow: "1px 1px 1px 1px #ccc",
  borderRadius: "10px",
  margin: "50px auto",
  width: "40%",
  fontSize: "25px",
  fontWeight: "bold",
  paddingTop: "15px",
  textAlign: "center",
});

const GridContainer = styled("div")({
  width: "100%",
  paddingBottom: "20%",
});

export default function ComplexGrid() {
  return (
    <Base>
      <Nav />
      <Container>
        <Box>
          <Title>총 상품 수</Title>
          <Score>600개</Score>
        </Box>
        <Box>
          <Title>수익</Title>
          <Score>600원</Score>
        </Box>
        <Box>
          <Title>사용자 수</Title>
          <Score>600명</Score>
        </Box>
      </Container>
      <Section>각 상품 수익</Section>
      <GridContainer>
        <Paper
          style={{ display: "inline-block" }}
          sx={{
            p: 2,
            marginTop: 4,
            marginLeft: 4,
            maxWidth: 200,
            flexGrow: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase sx={{ width: 200, height: 150 }}>
                <Img
                  alt="complex"
                  src="https://t1.daumcdn.net/tistoryfile/fs11/33_tistory_2009_02_26_22_41_49a69bf854e7c?x-content-disposition=inline"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    바다
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    인포플라
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: 20
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    삭제
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  50000원
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </GridContainer>
    </Base>
  );
}
