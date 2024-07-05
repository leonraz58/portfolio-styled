import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #ffeaac;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
    
    @media ${theme.media.mobile} {
        margin-top: 65px;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    p {
        display: none;
    }
`

const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmin: 36, Fmax: 50})}
    //font-family: 'Josefin Sans', sans-serif;
    //font-weight: 700;
    //font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    
    @media ${theme.media.mobile} {
         margin: 15px 0 22px
    }
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`

export const S = {
    Name, MainTitle, Photo, PhotoWrapper, StyledMain, SmallText
}