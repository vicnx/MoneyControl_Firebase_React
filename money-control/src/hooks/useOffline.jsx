import { useCallback, useContext, useState, useEffect } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "context/UserContext";
import CuentasContext from "context/CuentasContext" 
import dixieDB from "dixiedb";
import { offlineCuenta, offlineProfile } from "global/functions";

export default function useOffline() {
  //TODO Vicente: crear bd con dexie y realizar las llamadas de firebase necesarias para obtener toda la información y guardarla en la base de datos del navegador.
  //https://levelup.gitconnected.com/using-the-indexeddb-api-with-react-and-hooks-4e63d83a5d1b
  const { offlineMode, setOfflineMode } = useContext(UserContext);
  const { profile, setProfile } = useContext(UserContext);
  const { cuentas } = useContext(CuentasContext);


  useEffect(() => {
    //TODO Vicente: Si el offline mode se activa, se usa el usuario offline por defecto (comprobar si tiene en dixieDB ya creado uno)
    if(offlineMode){
      //comprobamos si hay perfil en la sesión, si hay se añade a la bd offline cambiado el id del doc por el de offline.
      if(profile){
        dixieDB.profile.put({...profile, docid: offlineProfile.docid});
      }else{
      // Solo se añade el perfil offline si no existe.
        dixieDB.profile.get('offlineProfile').then((result)=>{
          if(!result){
            dixieDB.profile.put(offlineProfile);
            setProfile(offlineProfile);
          }
        })
      }
    }
  }, [offlineMode, profile, setProfile])

  useEffect(() => {
    dixieDB.cuentas.clear();
    if(offlineMode){
      if(cuentas){
        dixieDB.cuentas.bulkPut(cuentas)
      }
      dixieDB.cuentas.add(offlineCuenta).then(() => console.log('Grupo agregado con éxito'))
      .catch((error) => console.log(`Error al agregar el grupo: ${error}`));
    }
  }, [offlineMode, cuentas])
  
  
  return {
    offlineMode, setOfflineMode
  };
}
