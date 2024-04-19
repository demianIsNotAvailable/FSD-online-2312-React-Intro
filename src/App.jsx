import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import { Body } from "./pages/Body/Body";
import { useEffect, useState } from "react";

function App() {
  const [isServerUp, setIsServerUp] = useState(false);

  useEffect(() => {
    const pingServer = async () => {
      const isAlive = await axios.get("http://localhost:27017/");
      setIsServerUp(isAlive);
    };
    pingServer()
  }, []);

  return (
    <>
      {isServerUp ? (
        <>
          <Header />
          <Body />
        </>
      ) : <p>aguanta tete</p>}
    </>
  );
}

export default App;
