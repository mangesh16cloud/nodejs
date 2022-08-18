import React from "react";
import { Container, Box, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IntroImage from "../images/intro.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  introBg: {
    backgroundImage: `url(${IntroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  textPrimary: {
    color: theme.palette.primary.dark,
  },

  textSecondary: {
    color: theme.palette.secondary.main,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className={classes.introBg}
      >
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h2" className={classes.textPrimary}>
            Hello! I am Mohd Zuhaib.
          </Typography>
          <Typography
            className={classes.textSecondary}
            variant="h4"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            I am a front-end Developer
          </Typography>
          <Button variant="outlined" color="primary" size="large">
            View My work
          </Button>
        </Box>
      </Box>

      <Toolbar style={{ backgroundColor: "black" }}>
        <Container maxWidth="lg">
          <Button variant="text" size="large" color="secondary">
            Home
          </Button>
          <Button variant="text" size="large" color="secondary">
            About
          </Button>
          <Button variant="text" size="large" color="secondary">
            Portfolio
          </Button>
          <Button variant="text" size="large" color="secondary">
            Contact
          </Button>
        </Container>
      </Toolbar>
    </>
  );
};

export default Header;
