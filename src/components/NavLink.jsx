import { Link } from "react-scroll"
import styled from "styled-components"

const NavLink = ({ children, to, offset = -50, mobileMenu = false, button, position, bottom, right }) => {
    return (
        <Item
            activeClass='active'
            to={to}
            spy={true}
            smooth={true}
            offset={offset}
            duration={1000}
            $mobileMenu={mobileMenu}
            $button={button}
            $position={position}
            $bottom={bottom}
            $right={right}
        >
            {children}
        </Item>
    )
}

const Item = styled(Link)`
    ${props => props.$mobileMenu ?
        ``
        :
        `
        cursor: pointer;
        position: relative;
        padding: 0 .2rem;

        ${props.$button ?
            `
            background: ${props.theme.bgLogo};
            color: ${props.theme.textLogo};
            padding: .8rem 2rem;
            border-radius: .8rem;
            ${props.$position &&
                `position: ${props.$position};
                bottom: ${props.$bottom};
                right: ${props.$right};
                `
            }
            `
            :
            `
            &::after {
                content: '';
                position: absolute;
                width: 0;
                border-bottom: solid ${props.theme.text} .123rem;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                transition: 1s;
            }
        
            &:hover::after {
                width: 100%;
            }
            &.active::before {
                content: '';
                position: absolute;
                width: 100%;
                border-bottom: solid ${props.theme.text} .123rem;
                bottom: 0;
                left: 0;
            }
            `
        }
        `
    }
`;

export default NavLink