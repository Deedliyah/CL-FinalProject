import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="aboutus" onClick={toggle}>O nas</SidebarLink>
                    <SidebarLink to="aboutus" onClick={toggle}>O nas</SidebarLink>
                    <SidebarLink to="aboutus" onClick={toggle}>O nas</SidebarLink>
                    <SidebarLink to="aboutus" onClick={toggle}>O nas</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Logowanie</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
