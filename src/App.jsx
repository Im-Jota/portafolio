import styled, { ThemeProvider } from "styled-components"
import Theme from "./theme/Theme"
import { useSelector } from "react-redux"
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

import Hero from "./views/Hero";
import Footer from "./views/Footer";
import NavLink from "./components/NavLink";

function App() {

  const { theme } = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={Theme[theme]}>
      <Container>
        <Hero />
        <Footer />
        <NavLink to={'home'} button={true} position={'fixed'} bottom={'2rem'} right={'2rem'}><MdOutlineKeyboardArrowUp /></NavLink>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transition: background 1.5s, color 1s, border 2s, box-shadow 1.5s;
`;

export default App
