import Dexie from 'dexie';

// Crea una instancia de Dexie
const dexieDB = new Dexie('moneyControlDB');

// Define las tablas necesarias
dexieDB.version(1).stores({
  profile: 'docid,admin,documentId,email,image,name,uid',
  cuentas: 'docid,cantidad,color,icono,name,uid,totalganancias,totalgastos,ingresos',
  grupos: 'docid, icono, color, imagen, name, default, codinv, desc, createdby, users, categories'

});
export default dexieDB;