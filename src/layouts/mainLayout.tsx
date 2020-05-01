import React from 'react';
import { Layout } from 'antd';
import CSS from 'csstype';

const layoutStyle: CSS.Properties = {
    minHeight: '100%',
    minWidth: '100%'
}

const footerStyle: CSS.Properties = {
    justifyContent: 'center',
    display: 'flex'
}

const contentStyle: CSS.Properties = {
    flex: '1'
}

const MainLayout = (props: any) => {
    
    const { Footer, Content } = Layout;

    return (
        <Layout style={layoutStyle}>
            <Content style={contentStyle}>
                {props.children}
            </Content>
            <Footer style={footerStyle}>{'Open Web Tools © '}{new Date().getFullYear()}</Footer>
        </Layout>
    );
}

export default MainLayout;