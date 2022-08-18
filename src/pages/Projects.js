import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import ProjectOne from "../images/bulk.png";
import ProjectTwo from "../images/swap.png";
import Typography from "@material-ui/core/Typography";

const Projects = () => {
  return (
    <Container
      maxWidth="md"
      style={{ height: "700px", display: "flex", flexDirection: "column" }}
    >
      <Box className="title" textAlign="center" py={8}>
        <Typography variant="h1">Projects</Typography>
      </Box>
      <Grid container>
        <Grid item md={6}>
          <img src={ProjectOne} alt="bulk" width="100%" />
        </Grid>
        <Grid item md={6}>
          <img src={ProjectTwo} alt="swap" width="100%" />
        </Grid>
      </Grid>

      <Typography variant="h3" style={{ marginTop: "16px" }}>
        And Many more to come...
      </Typography>
    </Container>
  );
};

export default Projects;
