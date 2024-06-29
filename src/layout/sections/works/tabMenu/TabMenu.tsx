import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link";

export const TabMenu = (props: { menuItems: string[] }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, i) => {
                    return <ListItem key={i}><Link href="">{item}</Link></ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        // gap: 20px;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
    
`

