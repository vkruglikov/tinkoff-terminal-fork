import React from 'react';
import {Layout} from 'antd';
import {Provider} from "react-redux";

import Dashboard from "./Dashboard";
import store from "./redux/store";

import 'antd/dist/antd.css';
import './styles.module.css';

const {Header, Footer, Content} = Layout;


function App() {
    return (
        <Layout>
            <Header>&nbsp;</Header>
            <Content>
                <Provider store={store}>
                    <Dashboard/>
                </Provider>
            </Content>
            <Footer>&nbsp;</Footer>
        </Layout>
    );
}

export default App;
