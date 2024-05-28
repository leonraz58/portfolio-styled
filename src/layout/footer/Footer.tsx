import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
            <Name>Svetlana</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"instagram"} height={"35px"} width={"35px"} viewBox={"0 0 35 35"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"telegram"} height={"35px"} width={"35px"} viewBox={"0 0 35 35"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"vkontakte"} height={"35px"} width={"35px"} viewBox={"0 0 35 35"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"linkedIn"} height={"35px"} width={"35px"} viewBox={"0 0 35 35"}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #ffd190;
    min-height: 20vh;

`
const Name = styled.span`

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`