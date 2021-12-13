import { useState, useEffect } from "react";
import { Layout, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Header from "../../components/Header";
import { getUserList } from "../../services";
import UserCard from "../../components/UserCard";
import "./styles.css";

const { Content } = Layout;

const UserList = () => {
  const [UserList, setUserList] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    setIsLoading(true);
    try {
      let list = await getUserList();
      setIsLoading(false);
      setUserList(list && list.data);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Header />
      <Content>
        {IsLoading ? (
          <div className="loader-container">
            <LoadingOutlined />
          </div>
        ) : (
          <>
            {UserList && UserList.length ? (
              <div className="list-container">
                {UserList.map((user) => (
                  <UserCard user={user} />
                ))}
              </div>
            ) : (
              <Typography>No user to show</Typography>
            )}
          </>
        )}
      </Content>
    </Layout>
  );
};

export default UserList;
