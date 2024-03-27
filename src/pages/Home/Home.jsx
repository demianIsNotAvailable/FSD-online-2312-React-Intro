import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/CustomInput/CustomInput";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // handlers
  const addCountButtonHandler = () => {
    
  };

  const inputHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  // useEffects
  useEffect(() => {}, [count]);

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

  return (
    <>
      <h1>SOY HOME</h1>
      <h1>Vite + React</h1>
      <h2>Este es el subtítulo</h2>
      <div className="card">
        <button onClick={addCountButtonHandler}>count is {count}</button>
        <h3>LOGIN</h3>
        <CustomInput
          typeProp="email"
          nameProp="email"
          placeholderProp="introduce tu email"
          handlerProp={inputHandler}
        />
        <CustomInput
          typeProp="password"
          nameProp="password"
          placeholderProp=""
          handlerProp={inputHandler}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
