import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import FindParking from "../pages/FindParking";
import RegisterParking from "../pages/RegisterParking";
import NotFound from "../pages/NotFound";

const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<FindParking />} />
        <Route path="/find" element={<FindParking />} />
        <Route path="/register" element={<RegisterParking />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
