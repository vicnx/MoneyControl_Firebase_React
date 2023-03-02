import Dexie from 'dexie';

// Crea una instancia de Dexie
const dixieDB = new Dexie('moneyControlDB');

// Define las tablas necesarias
dixieDB.version(1).stores({
  profile: '++id,admin,documentId,email,image,name,uid',
  // accounts: '++id, userId, name, balance, earnings, losses',
});

export default dixieDB;