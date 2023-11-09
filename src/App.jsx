import styled, { ThemeProvider } from "styled-components"
import Theme from "./theme/Theme"
import { useSelector } from "react-redux"
import Hero from "./views/Hero";
import Footer from "./views/Footer";

function App() {

  const { theme } = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={Theme[theme]}>
      <Container>
        <Hero />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  transition: background 1.5s, color 1s, border 2s, box-shadow 1.5s;
`;

export default App
