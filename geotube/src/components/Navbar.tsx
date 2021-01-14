import React from "react";
import Styled from "styled-components";


const Bar = Styled.nav`
    background: red;
`;

const Brand = Styled.p`
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
