import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";
import axios from "axios";

export default function App() {
  const [uid, setUid] = useState(null);

  useEffect(() =>{
    const fetchToken = async() =>{
      
    await axios ({
      method : "get",
      url : `${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials : true,
    })
    .then((res) => setUid(res.data))
    .catch((err) => console.log("No token"));
  }
  fetchToken();
  }, [uid]); // On met des crochets pour qu'il ne s'exécute pas à l'infini

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}
