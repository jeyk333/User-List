import React, { FC } from "react";
import { Layout, Typography } from "antd";

import "./styles.css";

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent: FC = () => {
  return (
    <Header className="header">
      <Title className="title">User Lists</Title>
    </Header>
  );
};

export default HeaderComponent;
