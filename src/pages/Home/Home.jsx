import { loginCall } from "../../services/apiCalls";
import { decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";
import { login } from "../../app/slices/userSlice";

export const Home = () => {

  // credenciales hardcodeadas para logear automáticamente con usuario y admin de prueba
  const user = {
    email: "patata@email.com",
    password: "password",
  };
  const admin = {
    email: "admin@admin.admin",
    password: "password",
  };

  const dispatch = useDispatch()

  const loginMe = async (role) => {
    console.log(role)
    const answer = await loginCall(role);
    if (answer.data.token) {
      const uDecodificado = decodeToken(answer.data.token);
      const passport = {
        token: answer.data.token,
        decodificado: uDecodificado,
      };
      dispatch(login(passport));
      console.log(passport)
    }
  };

  return (
    <>
      <h1>SOY HOME</h1>
      <h1>Vite + React</h1>
      <h2>Este es el subtítulo</h2>

      {/* botones de login automático con user y admin para no andar mareando */}
      <div className="card">
        <button onClick={() => loginMe(user)}>Login as User</button>
        <button onClick={() => loginMe(admin)}>Login as Admin</button>
      </div>
    </>
  );
};
