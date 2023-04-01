import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginSistema from "./components/Home/SignIn";
import CadastroSistema from "./components/Home/SignInUp";
import RecPassword from "./components/Home/RecPassword";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSistema />} />
      </Routes>
      <Routes>
        <Route path="/Cadastro" element={<CadastroSistema />} />
      </Routes>
      <Routes>
        <Route path="/RecPassword" element={<RecPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
export default routes;
