import React from "react";
import {
  Container,
  Box,
  FormControl,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textPrimary: {
    color: theme.palette.primary.dark,
  },

  textSecondary: {
    color: theme.palette.secondary.main,
  },

  inputText: {
    color: "#ffffff",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: "#252934" }}>
      <Container maxWidth="sm">
        <Box className="heading" textAlign="center" py={10}>
          <Typography variant="h1" className={classes.textPrimary}>
            Contact Me
          </Typography>
        </Box>

        <Grid container justify="center" direction="column">
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant="h6" className={classes.textSecondary}>
              Do you`ve any queries??
            </Typography>
          </Grid>

          <Grid item style={{ textAlign: "center" }}>
            <FormControl fullWidth>
              <TextField
                label="First Name"
                required
                type="text"
                inputProps={{ className: classes.inputText }}
              />
              <TextField
                label="Last Name"
                type="text"
                inputProps={{ className: classes.inputText }}
              />
              <TextField
                label="e-mail"
                type="text"
                inputProps={{ className: classes.inputText }}
              />
              <TextField
                label="Your Message"
                multiline
                rows={4}
                type="text"
                inputProps={{ className: classes.inputText }}
              />
              <Box textAlign="center" py="20px">
                <Button variant="contained" style={{ width: "50%" }}>
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
