export function randomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export let CONSTANTS = {
  defaultAvatar:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
};

export let defaultCategories = [
  {
    name: "Automóvil",
    icono: "carSportOutline",
    color: "#F44336",
  },
  {
    name: "Casa",
    icono: "homeOutline",
    color: "#9B59B6",
  },
  {
    name: "Comida",
    icono: "fastFoodOutline",
    color: "#5499C7",
  },
  {
    name: "Comunicaciones",
    icono: "callOutline",
    color: "#76D7C4",
  },
  {
    name: "Deportes",
    icono: "footballOutline",
    color: "#7DCEA0",
  },
  {
    name: "Entretenimiento",
    icono: "beerOutline",
    color: "#F7DC6F",
  },
  {
    name: "Higiene",
    icono: "sparklesOutline",
    color: "#E59866",
  },
  {
    name: "Mascotas",
    icono: "bugOutline",
    color: "#36f443",
  },
  {
    name: "Ropa",
    icono: "shirtOutline",
    color: "#4336f4",
  },
];

export const iconosGrupos = [
  "happyOutline",
  "flashOutline",
  "flaskOutline",
  "globeOutline",
  "heartOutline",
  "flowerOutline",
  "rocketOutline",
  "accessibilityOutline",
  "airplaneOutline",
  "alarmOutline",
  "beerOutline",
  "boatOutline",
  "barbellOutline",
  "bedOutline",
  "chatbubblesOutline",
];

export const iconosCuentas = [
  "walletOutline",
  "cardOutline",
  "logoPaypal",
  "cashOutline",
  "contrastOutline",
  "earthOutline",
  "serverOutline",
  "happyOutline",
  "flashOutline",
  "flaskOutline",
  "globeOutline",
  "heartOutline",
  "flowerOutline",
  "rocketOutline",
];

export const iconosCategorias = [
  "shirtOutline",
  "bugOutline",
  "sparklesOutline",
  "footballOutline",
  "callOutline",
  "fastFoodOutline",
  "homeOutline",
  "carSportOutline",
];

export const offlineCuenta = {
  icono: "cloudOfflineOutline",
  color: "#7895ff",
  cantidad: 0,
  name: "Offline",
  docid: 'offline'
}

export const offlineProfile = {
  uid: 'userOffline',
  admin: false,
  email: '',
  image: '',
  name: 'Offline user',
  docid:'offlineProfile'
}
