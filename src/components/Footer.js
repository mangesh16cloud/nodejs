import React from "react";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "@material-ui/core/Link";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyles = makeStyles((theme) => ({
  footBg: {
    backgroundColor: theme.palette.secondary.dark,
  },

  textPrimary: {
    color: theme.palette.primary.dark,
  },

  textSecondary: {
    color: theme.palette.secondary.main,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footBg}>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item>
            {" "}
            <Typography variant="body1">
              <Link
                href="https://www.linkedin.com/in/mohd-zuhaib-26a326171/"
                target="#"
              >
                <LinkedInIcon fontSize="large" color="secondary" />
              </Link>{" "}
              <Link href="https://www.instagram.com/zuhaib_ahmd/" target="#">
                <InstagramIcon
                  fontSize="large"
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                  color="secondary"
                />
              </Link>{" "}
              
              <Link href="https://twitter.com/DrVipr" target="#">
                <TwitterIcon fontSize="large" color="secondary" />
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            {" "}
            <Typography variant="h4" className={classes.textPrimary}>
              Mohd Zuhaib <span className={classes.textSecondary}>&copy; </span>
              2021
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
