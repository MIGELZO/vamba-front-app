import { Routes, Route } from "react-router-dom";
import ROUTES from "./routsModel";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import EditUserPage from "../users/pages/EditUserPage";
import CreateUserPage from "../users/pages/CreateUserPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
      <Route path={ROUTES.CREATE_USER} element={<CreateUserPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
