import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {TabsStatusType} from "../Works";

type TabMenuProps = {
    tabsItems: Array<{status: TabsStatusType, title: string}>,
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: TabsStatusType
}

export const TabMenu = (props: TabMenuProps) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, i) => {
                    return <ListItem key={i}><Link active={props.currentFilterStatus === item.status} as={"button"} onClick={()=>props.changeFilterStatus(item.status)}>{item.title}</Link></ListItem>
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

