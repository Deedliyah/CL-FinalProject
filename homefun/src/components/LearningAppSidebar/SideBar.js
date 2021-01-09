import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import { SideBarData } from './SideBarData';
import Sidebar from '../Sidebar';
import Submenu from './SideMenu';


const Nav = styled.div`
background: #010101;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`
const NavHome = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`

const SidebarNav = styled.nav`
background: #010101;
width: 350px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
margin-top: 80px;
transition: 350ms;
z-index: 10;
`
const SidebarWrap = styled.div`
  width: 100%;
`;




const SideBar = () => {
    return (
        <>
            <Nav>
                <NavHome to='./'>
                    <FaIcons.FaHome />
                </NavHome>
            </Nav>
            <SidebarNav>
                <SidebarWrap>
                    {SideBarData.map((item, index) => {
                        return <Submenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>

        </>
    )
}

export default SideBar
