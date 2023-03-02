import { useCallback, useContext, useState, useEffect } from "react"; //evita que se vuelva a ejecutar una funcion
import CuentasContext from "context/CuentasContext";
import { useHistory } from "react-router-dom";
//Firebase
import { app, db } from "firebase.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Router } from "react-router";

import {
  arrayRemove,
  arrayUnion,
  addDoc,
  collection,
  getDoc,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  documentId,
} from "firebase/firestore";

import UserContext from "context/UserContext";
import { addMinutes } from "date-fns";

import dixieDB from "dixiedb";

export default function useOffline() {
  //TODO Vicente: crear bd con dexie y realizar las llamadas de firebase necesarias para obtener toda la información y guardarla en la base de datos del navegador.
  //https://levelup.gitconnected.com/using-the-indexeddb-api-with-react-and-hooks-4e63d83a5d1b
  const { offlineMode, setOfflineMode } = useContext(UserContext);
  const { profile } = useContext(UserContext);


  useEffect(() => {
    //TODO Vicente: Si el offline mode se activa, mandar todos los datos actuales a dixie (crear modelos en dixiedb.jsx)
    if(offlineMode){
      dixieDB.profile.put(profile)
    }
    console.log(offlineMode);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offlineMode])
  
  return {
    offlineMode, setOfflineMode
  };
}
