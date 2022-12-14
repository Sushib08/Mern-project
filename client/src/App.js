import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { getUser } from "./actions/user.actions";

export default function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(async() =>{
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("No token"));
    });

    if (uid) dispatch(getUser(uid));
    // Safe to add dispatch to the dependencies array
  }, [uid, dispatch])

  
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     await axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}jwtid`,
  //       withCredentials: true,
  //     })
  //       .then((res) => setUid(res.data))
  //       .catch((err) => console.log("No token"));
  //   };
  //   fetchToken();

  //   if (uid) dispatch(getUser(uid));
  // }, [uid]); // On met des crochets pour qu'il ne s'exécute pas à l'infini

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}
