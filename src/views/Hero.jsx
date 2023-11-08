import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components"
import NavLink from "../components/NavLink";
import { changeTheme } from '../features/theme/themeSlice'

const Hero = () => {

    const dispatch = useDispatch();
    const {selectedTheme} = useSelector(state => state.theme);

    return (
        <Header name={'home'}>
            <NavBar>
                <Left>
                    <Logo>J</Logo>
                    <span>ose Luis</span>
                </Left>
                <Nav>
                    <NavLink to={'home'}>Home</NavLink>
                    <NavLink to={'about'}>About Me</NavLink>
                    <NavLink to={'Projects'}>Projects</NavLink>
                </Nav>
                <Right>
                    <NavLink to={'contact'} button={true}>Contact Me</NavLink>
                    <button onClick={() => dispatch(changeTheme(selectedTheme))}>x</button>
                </Right>
            </NavBar>
        </Header>
    )
}

const Right = styled.div`
    display: flex;
    gap: 1rem;
`;

const Logo = styled.div`
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.bgLogo};
    color: ${({ theme }) => theme.textLogo};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: .2rem;

`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
`;

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
`;

const Header = styled.header`
    width: 100%;

`;

export default Hero