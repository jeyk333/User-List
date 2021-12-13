import React, { FC, useState, useEffect } from "react";
import { Card, Typography } from "antd";
import {
  EditOutlined,
  DeleteFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import { getUserAvatar } from "../../services";

import "./styles.css";

type List = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
};

type Props = {
  user: List;
};

const { Title, Text } = Typography;

const UserCard: FC<Props> = ({
  user: { username, name, id, email, phone, website },
}) => {
  const [Avatar, setAvatar] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAvatar(username);
  }, []);

  const getAvatar = async (value: string) => {
    setIsLoading(true);
    try {
      let avatar = await getUserAvatar(value);
      setIsLoading(false);
      setAvatar(avatar.data);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <Card
      className="user-card"
      cover={
        IsLoading ? (
          <div>Loading...</div>
        ) : (
          <div
            className="user-image"
            dangerouslySetInnerHTML={{ __html: Avatar }}
          />
        )
      }
      actions={[
        <HeartOutlined className="heart-icon" />,
        <EditOutlined key="edit" />,
        <DeleteFilled />,
      ]}
      key={id}
    >
      <Title>{name}</Title>
      <Text className="text-wrapper">
        <MailOutlined />
        {email}
      </Text>
      <Text className="text-wrapper">
        <PhoneOutlined />
        {phone}
      </Text>
      <Text className="text-wrapper">
        <GlobalOutlined />
        {website}
      </Text>
    </Card>
  );
};

export default UserCard;
