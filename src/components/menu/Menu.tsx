import React from 'react';
import styled from "styled-components";

export const Menu = (props: { menuItems: string[] }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, i) => {
                    return <li key={i}><a href="">{item}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`