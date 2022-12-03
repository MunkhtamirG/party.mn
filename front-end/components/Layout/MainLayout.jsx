import React from "react";
import { Layout } from "antd";
import Sider from "../PSider/Sider";
import Navbar from "../PNavbar/Navbar";
import Footer from "../PFooter/Footer";
import Head from "next/head";
const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Party</title>
        <link rel="icon" href="party.png" type="image/x-icon" />
      </Head>
      <Layout className="h-screen">
        <Sider />
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <Content>
            <div>{children}</div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};
export default MainLayout;
