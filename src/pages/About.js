import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import FastForwardIcon from "@material-ui/icons/FastForward";
import VisibilityIcon from "@material-ui/icons/Visibility";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const About = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#e2ecf5" }}>
        <Container maxWidth="md" style={{ height: "830px" }}>
          <Box className="heading" textAlign="center" py={8}>
            <Typography variant="h1">About</Typography>
          </Box>

          <Grid container spacing={3} justify="center">
            <Grid item>
              <Box display="flex" flexDirection="column" alignItems="center">
                <FastForwardIcon fontSize="large" />
                <Button size="large">Responsive</Button>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" flexDirection="column" alignItems="center">
                <VisibilityIcon fontSize="large" />
                <Button size="large">Intuitive</Button>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" flexDirection="column" alignItems="center">
                <FlashOnIcon fontSize="large" />
                <Button size="large">Dynamic</Button>
              </Box>
            </Grid>

            <Grid item>
              <Box display="flex" flexDirection="column" alignItems="center">
                <WbIncandescentIcon fontSize="large" />
                <Button size="large">Creative</Button>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={5}
            alignItems="center"
            style={{ height: "50vh" }}
          >
            <Grid item xs={12} md={7}>
              <Typography variant="h2">Who am I ?</Typography> <br />
              <Typography variant="body1">
                Am a new comer to the web developement world based in Delhi,
                India
              </Typography>
              <Typography variant="body1">
                I have a serious passion for creative ui designs , an attractive
                website design always sparks a joy.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Typography variant="h3">HTML5</Typography>
              <LinearProgress
                variant="determinate"
                value={70}
                style={{
                  marginTop: "5px",
                  marginBottom: "15px",
                  paddingTop: "15px",
                }}
              />

              <Typography variant="h3">CSS3</Typography>
              <LinearProgress
                variant="determinate"
                value={80}
                color="secondary"
                style={{
                  marginTop: "5px",
                  marginBottom: "15px",
                  paddingTop: "15px",
                }}
              />

              <Typography variant="h3">JavaScript</Typography>
              <LinearProgress
                variant="determinate"
                value={40}
                style={{
                  marginTop: "5px",
                  marginBottom: "15px",
                  paddingTop: "15px",
                }}
              />

              <Typography variant="h3">React Js</Typography>
              <LinearProgress
                variant="determinate"
                value={90}
                color="secondary"
                style={{
                  marginTop: "5px",
                 
                  paddingTop: "15px",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
