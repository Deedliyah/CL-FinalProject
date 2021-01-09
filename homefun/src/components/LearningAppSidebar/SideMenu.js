import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarkLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover {
    background: #3b3b3b;
    border-left: #e1e9fc;
border-left: 4px solid #632ce4;
cursor: pointer;
}
`

const SidebarLabel = styled.span`
margin-left: 16px;
`
const DropdownLink = styled(Link)`
background: #252831;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #e1e9fc;
font-size: 18px;

&:hover {
    background: #3b3b3b;
    border: 4px solid #632ce4;
    cursor: pointer;
}
`


const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <SidebarkLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>{item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel></div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarkLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default Submenu