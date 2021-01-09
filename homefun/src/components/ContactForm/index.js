import React from 'react'
import { FaFacebook as ContactBadgeIcon } from 'react-icons/fa';
import { ContactSection, ContactH1, ContactSpan, ContactWrapper, ContactBadge, ContactBadgeH2, ContactBadgeP, ContactBadgeLine, ContactBadgeData, ContactF, ContactLabel, ContactInput, ContactMessageInput, ContactMessageWrapper, ConstactMessageLabel } from './ContactFormElements';
import { Button } from './../ButtonElements'


const ContactForm = () => {
    return (
        <>
            <ContactSection id='contact'>
                <ContactH1>Napisz do nas!</ContactH1>
                <ContactSpan>Chętnie wysłuchamy Twojej opinii.</ContactSpan>
                <ContactWrapper>
                    <ContactBadge>
                        <ContactBadgeH2>Dane kontaktowe</ContactBadgeH2>
                        <ContactBadgeP>Lorem lorem i inne głupotki</ContactBadgeP>
                        <ContactBadgeLine>
                            <ContactBadgeIcon />
                            <ContactBadgeData>Zadzwoń!</ContactBadgeData>
                        </ContactBadgeLine>
                        <ContactBadgeLine>
                            <ContactBadgeIcon />
                            <ContactBadgeData>Napisz!</ContactBadgeData>
                        </ContactBadgeLine>
                        <ContactBadgeLine>
                            <ContactBadgeIcon />
                            <ContactBadgeData>Wpadnij!</ContactBadgeData>
                        </ContactBadgeLine>
                    </ContactBadge>
                    <ContactF>
                        <ContactLabel>Imię</ContactLabel>
                        <ContactInput></ContactInput>
                        <ContactLabel>Nazwisko</ContactLabel>
                        <ContactInput></ContactInput>
                        <ContactLabel>Numer telefonu</ContactLabel>
                        <ContactInput></ContactInput>
                        <ContactLabel>Mail kontaktowy</ContactLabel>
                        <ContactInput></ContactInput>
                        <ContactMessageWrapper>
                            <ConstactMessageLabel>Wiadomość</ConstactMessageLabel>
                            <ContactMessageInput />
                        </ContactMessageWrapper>
                        <Button smooth={true} duration={500} spy={true} exact="true" offset={-80}>Wyślij</Button>
                    </ContactF>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default ContactForm
