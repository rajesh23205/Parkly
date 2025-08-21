import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout: React.FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default MainLayout;
