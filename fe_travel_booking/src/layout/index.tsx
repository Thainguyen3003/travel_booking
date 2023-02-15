import { ReactNode } from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import SiderBar from "./Sidebar";
import { Footer } from "./Footer";

interface Props {
  children?: ReactNode;
}

function Mainlayout({ children }: Props) {
  return (
    <Layout>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </Layout>
  );
}

export default Mainlayout;
