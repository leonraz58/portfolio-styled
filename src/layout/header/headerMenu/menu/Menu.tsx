import React from 'react';
import {S} from '../HeaderMenu_Styles'

// const items = ["Home", "Skills", "Works", "Testimony", "Contacts"]
const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contacts",
        href: "contacts"
    },
]


export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, i) => {
                return <S.MenuItem key={i}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-20}
                    >
                        {item.title}
                        <S.Mask><span>{item.title}</span></S.Mask>
                        <S.Mask><span>{item.title}</span></S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};