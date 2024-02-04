import "./App.css";
import { Box } from "@mui/material";
import {CssBaseline} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EducationTimeline from "./components/Timeline";
// import T

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#23283e',
      dark: '#040c24',
      light: '#474E68'
    },
    buttonCustom: {
      main:'#8dc1ff'
    },
    text: {
      primary: '#9da5bd',
      secondary: '#ffffff',
      dark: '#3a4c7a',
      light: '#ffffff',
      disabled: '#8dc1ff'
    }
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            marginTop: 0,
            bgcolor: 'primary.main'
          }}
        >
          <Navbar/>
          <HeroSection />
          <EducationTimeline />
          
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
