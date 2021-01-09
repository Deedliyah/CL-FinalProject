import styled from 'styled-components';

export const ContactSection = styled.section`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 860px;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

export const ContactH1 = styled.h1`
margin-bottom: 24px;
display: flex;
justify-content: center;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: #010606;

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`
export const ContactSpan = styled.span`
display: flex;
justify-content: center;
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: #010606;
`

export const ContactWrapper = styled.div`
display: flex;
flex-grow: none;
flex-wrap: none;
z-index: 1;
height: 660px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding-bottom: 50px;
padding: 10px;
background-color: #f9f9f9;
border-radius: 15px;
border: 1px solid #010101;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
`
export const ContactBadge = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
z-index: 2;
padding: 10px;
display: flex;
flex-direction: flex-start;
height: 640px;
width: 350px;
background-color: #010101;
border-radius: 15px;
border: 1px solid #fff;
`

export const ContactBadgeH2 = styled.h2`
display: flex;
justify-content: center;
font-size: 32px;
margin-bottom: 18px;
line-height: 1.1;
font-weight: 400;
color: #f9f9f9;
width: 100%;

@media screen and (max-width: 480px) {
    font-size: 24px;
}
`
export const ContactBadgeP = styled.p`
display: flex;
justify-content: center;
font-size: 16px;
letter-spacing: 1.4px;
line-height: 16px;
color: #f9f9f9;
margin-bottom: 16px;
width: 100%;
`
export const ContactBadgeLine = styled.div`
display: flex;
flex-direction: space-between;
width: 100%;
`

export const ContactBadgeIcon = styled.i`
color: #f9f9f9;
font-size: 24px;
`

export const ContactBadgeData = styled.p`
color: #f9f9f9;
font-size: 24px;
`

export const ContactF = styled.form`
margin-bottom: 15px;
padding: 10px;
padding-bottom: 50px;
display: flex;
height: 660px;
width: 700px;
display: flex;
flex-direction: column;

`

export const ContactLabel = styled.label`
font-size: 12px;
font-weight: 200;
margin-bottom: 12px;
`

export const ContactInput = styled.input`
background: transparent;
padding: 20px;
font-size: 16px;
cursor: pointer;
border-top: 1px solid #f9f9f9;
transition: all 0.2s ease-in-out;
margin-bottom: 10px;
&:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid #010101;
}
&:active {
    border-bottom: 2px solid #010101;
}
`
export const ContactMessageWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
margin: 0 auto;
padding-bottom: 30px;
`
export const ConstactMessageLabel = styled.label`
font-size: 12px;
font-weight: 200;
margin-bottom: 12px;
`

export const ContactMessageInput = styled.input`
background: transparent;
padding: 20px;
font-size: 48px;
cursor: pointer;
border-top: 2px solid #f9f9f9;
transition: all 0.2s ease-in-out;
&:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid #010101;
}
&:active {
    border-bottom: 2px solid #010101;
}
`

