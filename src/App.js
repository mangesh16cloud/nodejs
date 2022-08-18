import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import { createTheme } from "./theme/index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const theme = createTheme();
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
