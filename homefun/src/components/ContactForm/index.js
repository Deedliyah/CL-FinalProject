import React from 'react'
import { FaFacebook as ContactBadgeIcon } from 'react-icons/fa';
import { ContactSection, ContactH1, ContactSpan, ContactWrapper, ContactBadge, ContactBadgeH2, ContactBadgeP, ContactBadgeLine, ContactBadgeData, ContactF, ContactLabel, ContactInput, ContactMessageInput, ContactMessageWrapper, ConstactMessageLabel } from './ContactFormElements';
import { Button } from './../ButtonElements'


const ContactForm = () => {
    return (
        <>
            <ContactSection>
                <ContactH1></ContactH1>
                <ContactSpan></ContactSpan>
                <ContactWrapper>
                    <ContactBadge>
                        <ContactBadgeH2>Dane kontaktowe</ContactBadgeH2>
                        <ContactBadgeP>Lorem lorem i inne głupotki</ContactBadgeP>
                        <ContactBadgeLine>
                            <ContactBadgeIcon />
                            <ContactBadgeData></ContactBadgeData>
                        </ContactBadgeLine>
                        <ContactBadgeLine>
                            <ContactBadgeIcon />
                            <ContactBadgeData></ContactBadgeData>
                        </ContactBadgeLine>
                        <ContactBadgeLine>
                            <ContactBadgeIcon />
                            <ContactBadgeData></ContactBadgeData>
                        </ContactBadgeLine>
                    </ContactBadge>
                    <ContactF>
                        <ContactLabel></ContactLabel>
                        <ContactInput></ContactInput>
                        <ContactLabel></ContactLabel>
                        <ContactInput></ContactInput>
                        <ContactLabel></ContactLabel>
                        <ContactInput></ContactInput>
                        <ContactLabel></ContactLabel>
                        <ContactInput></ContactInput>
                        <ContactMessageWrapper>
                            <ConstactMessageLabel>Wiadomość</ConstactMessageLabel>
                            <ContactMessageInput />
                        </ContactMessageWrapper>
                        <Button smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={true} dark={false} dark2={false}>Wyślij</Button>
                    </ContactF>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default ContactForm
