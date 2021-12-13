import axios from "axios";

const getHeader = () => {
  return {
    "Content-Type": "application/json",
  };
};

export const getUserList = async () => {
  const list = await axios("https://jsonplaceholder.typicode.com/users", {
    headers: getHeader(),
    method: "GET",
  });

  return list;
};

export const getUserAvatar = async (name: string) => {
  const avatar = await axios(
    `https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`,
    {
      headers: getHeader(),
      method: "GET",
    }
  );

  return avatar;
};
