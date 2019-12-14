import React, { Component } from 'react';
import Routes from "./routes";
import DocumentTitle from "react-document-title";
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { Layout, notification, Icon } from "antd";
// import { ThemePicker } from './components/widget';
import { connectAlita } from 'redux-alita';
// import { checkLogin } from './utils';

const { Content, Footer } = Layout;

type AppProps = {
  setAlitaState: (param: any) => void;
  auth: any;
  responsive: any;
};

class App extends Component<AppProps> {
  state = {
    collapsed: false,
    title: "mrysissb.com"
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    console.log(this.props);
    const { title } = this.state;
    const { auth = { data: {} }, responsive = { data: {} } } = this.props;
    console.log(auth);
    return (
      <DocumentTitle title={title}>
        <Layout>
          <SiderCustom collapsed={this.state.collapsed} />
          <Layout style={{ flexDirection: "column"}}>
            <HeaderCustom
              toggle={this.toggle}
              collapsed={this.state.collapsed}
              user={auth.data || {}}
            />
            <Content
              style={{ margin: "0 16px", overflow: "initial", flex: "1 1 0" }}
            >
              <Routes auth={auth} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              mrys-Admin ©{new Date().getFullYear()} Created by
              1510218499@qq.com
            </Footer>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}
export default connectAlita(['auth', 'responsive'])(App);