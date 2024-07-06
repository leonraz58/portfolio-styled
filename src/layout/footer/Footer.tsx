import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"


const socialItemsData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vkontakte"
    },
    {
        iconId: "linkedIn"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Svetlana</S.Name>

                <S.SocialList>
                    {socialItemsData.map((item, index) => {
                        return <S.SocialItem>
                            <S.SocialLink>
                                <Icon iconId={item.iconId} height={"35"} width={"35"} viewBox={"0 0 35 35"} key={index}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.StyledFooter>
    );
};
