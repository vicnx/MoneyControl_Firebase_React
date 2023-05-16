import { useCallback, useContext, useState, useEffect } from 'react'; //evita que se vuelva a ejecutar una funcion
import UserContext from 'context/UserContext';
import CuentasContext from 'context/CuentasContext';
import dexieDB from 'dexiedb';
import { offlineCuenta, offlineProfile } from 'global/functions';
import { getAuth, signOut } from 'firebase/auth';

export default function useOffline() {
	const { offlineMode, setOfflineMode } = useContext(UserContext);
	const { profile, setProfile } = useContext(UserContext);
	const { cuentas, setCuentas } = useContext(CuentasContext);

	useEffect(() => {
		//TODO Vicente: Si el offline mode se activa, se usa el usuario offline por defecto (comprobar si tiene en dexieDB ya creado uno)
		if (offlineMode) {
			document.querySelector('body').classList.add('offline');
			dexieDB.profile.get('offlineProfile').then((res) => {
				if (profile) {
					//comprobamos si hay perfil en la sesión, si hay se añade a la bd offline cambiado el id del doc por el de offline.
					dexieDB.profile.put({ ...profile, docid: offlineProfile.docid });
				} else {
					dexieDB.profile.put(offlineProfile);
					setProfile(offlineProfile);
				}
			});
      //se añaden las cuantas (si tiene el setter).
			dexieDB.table('cuentas').count().then((result) => {
        // Si no hay cuentas en la base de datos de dexie (modo offline) se añaden. SI hay se utilizan las que ya hay creadas
        // TODO: Preguntar al usuario si se detectan cuentas si quiere mantenerlas.
        if (!(result > 0)) {
          dexieDB.table('cuentas').add(offlineCuenta);
        } else {
          dexieDB.table('cuentas').toArray().then((cuentasDexieDB) => setCuentas(cuentasDexieDB));
        }
      });

      //TODO Vicente: Cerrar sesión en firebase.
      const auth = getAuth();
      if (auth.currentUser !== null) {
        signOut(auth).then(() => {
          console.log('Sesión de firebase cerrada');
        }).catch((error) => {
          console.log(error);
        });
      }
		}else{
			document.querySelector('body').classList.remove('offline');

		}

	}, [offlineMode]);

	return {
		offlineMode,
		setOfflineMode,
	};
}
