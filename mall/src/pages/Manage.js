import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Nav from "../components/Nav/Nav";

const Section = styled("section")({});

const AllProfit = styled("div")({
  position: "fixed",
  top: "10%",
  right: "0",
  height: "100%",
  width: "40%",
  border: "1px solid gray",
});

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "cover",
});

export default function ComplexGrid() {
  return (
    <>
      <Nav />
      <Section>
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
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: 1030114
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
                  $19.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <AllProfit>수익</AllProfit>
      </Section>
    </>
  );
}
