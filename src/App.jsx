import "./App.css";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EducationTimeline from "./components/Timeline";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";

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
      light: '#8dc1ff',
      disabled: '#040c24'
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
            minWidth: '100vw',
            bgcolor: 'primary.main'
          }}
        >
          <Navbar/>
          <HeroSection />
          <EducationTimeline />
          <Skills/>
          <ProjectList />
          
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
