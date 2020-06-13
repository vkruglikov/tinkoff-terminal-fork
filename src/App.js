import React from 'react';
import {Layout} from 'antd';
import Dashboard from "./Dashboard";

import 'antd/dist/antd.css';
import './styles.module.css';

const {Header, Footer, Content} = Layout;


function App() {
    return (
        <Layout>
            <Header>&nbsp;</Header>
            <Content>
                <Dashboard/>
            </Content>
            <Footer>&nbsp;</Footer>
        </Layout>
    );
}

export default App;
