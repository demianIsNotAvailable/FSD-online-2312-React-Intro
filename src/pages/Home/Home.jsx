import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/CustomInput/CustomInput";


export const Home = () => {
    const [count, setCount] = useState(0);
    const [inputData, setInputData] = useState("");
    const password = "contraseña secreta";

    const navigate = useNavigate()
  
    // handlers
    const addCountButtonHandler = () => {
      setCount(count + 1);
    };
  
    const inputHandler = (event) => {
      setInputData(event.target.value);
    };


    // useEffects
    useEffect(() => {}, [count]);
  
    useEffect(() => {
      if (inputData === password) {
        console.log("SON IGUALES!");
        setCount(9999);
        navigate("/login")
      }
    }, [inputData]);
  
  return (
    <>
      <h1>SOY HOME</h1>
      <h1>Vite + React</h1>
      <h2>Este es el subtítulo</h2>
      <div className="card">
        <button onClick={addCountButtonHandler}>count is {count}</button>
        <input
          type="text"
          name="inputDePrueba"
          onChange={(event) => inputHandler(event)}
        ></input>
        <CustomInput
        typeProp="email"
        nameProp="emailInput"
        placeholderProp="introduce tu email"
        handlerProp={inputHandler} />
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
