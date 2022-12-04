import { Layout, Menu } from "antd";
import React, { useState } from "react";
import icon1 from "../../public/images/confetti.png";
import Image from "next/image";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Үдэшлэг төлөвлөх", "1", <Image src={icon1} width={24} />),
  // getItem("Option 2", "2", <DesktopOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  // getItem("Files", "9", <FileOutlined />),
];

export default function PSider() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="flex justify-center items-center p-5 gap-3">
        <img
          src="images/party.png"
          alt="party.mn"
          className={!collapsed ? "w-[25%]" : ""}
        />
        {!collapsed ? (
          <h1 className=" font-bold text-2xl text-gray-200">Party</h1>
        ) : null}
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}
