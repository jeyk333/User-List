import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserList from "../views/UserList";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
