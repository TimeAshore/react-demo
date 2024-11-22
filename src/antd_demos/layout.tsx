import React from 'react';
// import { Breadcrumb, theme } from 'antd';
import { Layout, Menu } from 'antd';
import { Image } from 'antd';

// import TableApp from "./table";
import StepsApp from "./steps";

const { Header, Content, Footer } = Layout;

const LayoutApp: React.FC = () => {
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();

    return (
        <Layout className="layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'black'}}>
                <div className="demo-logo" style={{ marginRight: '20px' }}>
                    <Image src="src/assets/react.svg" />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ backgroundColor: 'black'}}
                    // defaultSelectedKeys={['2']}
                    items={new Array(10).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </Header>
            <Content style={{ padding: '50px 50px', alignItems: 'center', flex: 1 }}>
                {/*<TableApp />*/}
                <h2>User Guide</h2>
                <StepsApp />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default LayoutApp;