import React, {ElementRef, FormEvent, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles"
import emailjs from '@emailjs/browser'

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_di6o1q2', 'template_y9psgpc', form.current, {
                publicKey: 'Ar4Ps6eLj_E1qLW3_',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.currentTarget.reset();
    };
    return (
        <S.StyledContacts id={"contacts"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"}/>
                    <S.Field required placeholder={"email"} name={"email"}/>
                    <S.Field required placeholder={"subject"} name={"subject"}/>
                    <S.Field required as={"textarea"} placeholder={"message"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContacts>
    );
};

