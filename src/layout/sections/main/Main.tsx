import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap">
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50
                                }}
                            /></S.MainTitle>
                    </div>
                    <Tilt className="background-stripes parallax-effect-glare-scale"
                          perspective={500}
                          glareEnable={true}
                          glareMaxOpacity={0.45}
                          scale={1.02}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};
