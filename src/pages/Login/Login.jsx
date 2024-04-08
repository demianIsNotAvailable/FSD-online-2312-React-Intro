import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { ButtonC } from "../../components/ButtonC/ButtonC";
import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import "./Login.css";
import { loginCall } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

export const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  // el Login necesita guardar el token en el almacén de redux, así que necesita poder hacer uso
  // del modo escritura. Instanciamos el dispatch
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    //genero la función que bindea

    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginMe = async () => {
    //esta será la función que desencadenará el login...
    const answer = await loginCall(credentials);
    if (answer.data.token) {
      //decodificamos el token...
      const uDecodificado = decodeToken(answer.data.token);

      const passport = {
        token: answer.data.token,
        decodificado: uDecodificado,
      };

      // llamamos al almacén de redux dándole la instrucción de que realice un login con nuestro passport.
      // dentro de la función "login" de userSlice, ese passport se recibe a través del action.payload
      dispatch(login(passport))

      console.log(passport);
      //Guardaríamos passport bien en RDX o session/localStorage si no disponemos del primero
      sessionStorage.setItem("passport", JSON.stringify(passport))
      
      setMsg(`${uDecodificado.name}, bienvenid@ de nuevo.`);

      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    }
  };

  return (
    <div className="login-container loginElementsDesign">
      {msg === "" ? (
        <>
          <CustomInput
            typeProp={"email"}
            nameProp={"email"}
            handlerProp={(e) => inputHandler(e)}
            placeholderProp={"escribe tu e-mail"}
          />
          <CustomInput
            typeProp={"password"}
            nameProp={"password"}
            handlerProp={(e) => inputHandler(e)}
            placeholderProp={"escribe el password"}
          />

          <ButtonC
            title={"log me!"}
            className={"regularButtonClass"}
            functionEmit={loginMe}
          />
        </>
      ) : (
        <div>{msg}</div>
      )}
      <pre>{JSON.stringify(credentials, null, 2)}</pre>
    </div>
  );
};
