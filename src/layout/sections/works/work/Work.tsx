import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>DEMO</Link>
            <Link href={"#"}>CODE</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: antiquewhite;
    width: 100%;
    max-width: 540px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3``

const Text = styled.p``

const Link = styled.a`

`