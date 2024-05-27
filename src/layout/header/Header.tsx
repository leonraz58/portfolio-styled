import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
        <Logo/>
        <Menu/>
        </StyledHeader>
    );
};

export const StyledHeader = styled.header`
    background-color: #91ff91;
    display: flex;
    justify-content: space-between;
`
