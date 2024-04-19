import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../Login/Login";
import { Home } from "../Home/Home";
import { Characters } from "../Characters/Characters";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { Admin } from "../Admin/Admin";
import { AdminRoute } from "../../components/AdminRoute/AdminRoute";

export const Body = () => {

  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* definimos una ruta que carga el elemento AdminRoute que ejerce de "middleware" isAdmin a nivel front,
        de manera que si eres admin te carga la vista que le pases por el prop "Component", y si no manda a home. */}
        <Route path="/admin" element={<AdminRoute Component={Admin} />} />
      </Routes>
    </>
  );
};
