import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles'
import "./Slider.css"

type SlidePropsType = {
    text: string,
    username: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>{props.username}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
        username={"@ivan ivanow"}/>,
    <Slide
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
        username={"@vasya vasin"}/>,
    <Slide
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
        username={"@petya petin"}/>
];

export const Slider = () => (
    <S.StyledSlider>
        <AliceCarousel
            disableButtonsControls
            mouseTracking
            items={items}
        />
    </S.StyledSlider>
);

// import React from 'react';
// import {FlexWrapper} from "../FlexWrapper";
// import {S} from './Slider_Styles'
//
// export const Slider: React.FC = () => {
//     return (
//         <S.StyledSlider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//                         labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit.</S.Text>
//                     <S.Name>@ivan ivanow</S.Name>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span> </span>
//                 <span className={"active"}> </span>
//                 <span> </span>
//             </S.Pagination>
//         </S.StyledSlider>
//     );
// };


