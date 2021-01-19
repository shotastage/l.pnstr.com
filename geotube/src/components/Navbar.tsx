import React from "react";
import Styled from "styled-components";


const Bar = Styled.nav`
    z-index: 100;
    display: flex;
    position: absolute;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    background: white;
    filter: drop-shadow(0px 0px 1px rgb(184, 184, 184));
    max-width: 340px;
    min-width: 340px;
    height: 70px;
    margin: 1.2rem 0 0 1.5rem;
    top: 0;
    border-radius: 35px;
    padding-left: 1em;
    filter: drop-shadow(5px 5px 5px rgba(191, 191, 191));
    @media screen and (max-width: 480px) {
        height: 60px;
    }
`;

const Brand = Styled.p`
    font-weight: bold;
    font-size: 1.2em;
`;

const Navbar: React.FC = () => {
    return (
        <>
            <Bar>
                <Brand>Geotube</Brand>
            </Bar>
        </>
    );
}

export default Navbar;
