import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { BiMoon, BiSun } from 'react-icons/bi'

import NavLink from "../components/NavLink";
import { changeTheme } from '../features/theme/themeSlice'
import { useEffect, useState } from "react";

const Hero = () => {

    const dispatch = useDispatch();
    const { selectedTheme } = useSelector(state => state.theme);

    const [scroll, setScroll] = useState(false);
    const handlerScroll = () => {
        if (window.scrollY > 10) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll', handlerScroll);

    return (
        <Header name={'home'}>
            <NavBar $scroll={scroll}>
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
                    <Button
                        onClick={() => dispatch(changeTheme(selectedTheme))}>
                        {selectedTheme === 'light' ? <BiSun /> : <BiMoon />}
                    </Button>
                </Right>
            </NavBar>
            <h1>Jose Luis</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse delectus praesentium placeat pariatur quo temporibus ipsam, ullam consequuntur cum laudantium? Mollitia nam cumque, dolor consectetur debitis laborum eum quaerat a?</p>
        </Header>
    )
}

const Button = styled.button`
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-size: 1rem;
`;

const Right = styled.div`
    display: flex;
    gap: 1rem;
`;

const Logo = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background: ${({ theme }) => theme.bgLogo};
    color: ${({ theme }) => theme.textLogo};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .2rem;

`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: .2rem;
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
`;

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    background: ${({theme}) => theme.bgNav};
    transition: background 1.5s, box-shadow 1s;
    ${props => props.$scroll && `
        backdrop-filter: blur(0.09rem);
        box-shadow: 0 1px 16px ${props.theme.shadow};
    `}
`;

const Header = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default Hero