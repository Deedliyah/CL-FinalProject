import React from 'react';
import '../Layout/Layout.css';
import { Menu } from 'antd';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const LandingPage = () => {
    return <LandingPageO />
};

const LandingPageO = () => (
    <>
        {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                Content
</div>
        </Content> */}
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </>
);

export default LandingPage