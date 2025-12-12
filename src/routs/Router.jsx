import { Routes, Route } from "react-router-dom";
import ROUTES from "./routsModel";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
