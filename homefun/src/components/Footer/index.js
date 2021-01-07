import React from 'react';
import { FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItems, FooterLinkTitle, FooterLinkWrapper, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { FaFacebook } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>

                                <FooterLinkTitle>O nas</FooterLinkTitle>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>

                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    O nas</FooterLinkTitle>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Social Media</FooterLinkTitle>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                                <FooterLink to="/login">Zaloguj się</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer >
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}> HomeFun  </SocialLogo>
                            <WebsiteRights>
                                HomeFun c {new Date().getFullYear()} All rights reserved.
                                </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap >
            </FooterContainer >

        </>
    )
}

export default Footer
