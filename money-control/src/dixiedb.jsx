import Dexie from 'dexie';

// Crea una instancia de Dexie
const dixieDB = new Dexie('moneyControlDB');

// Define las tablas necesarias
dixieDB.version(1).stores({
  profile: 'docid,admin,documentId,email,image,name,uid',
  cuentas: 'docid,cantidad,color,icono,name,uid,totalganancias,totalgastos,ingresos',
});
export default dixieDB;