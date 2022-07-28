import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
//   apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
//   authDomain: "restaurantapp-c2ed6.firebaseapp.com",
//   databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
//   projectId: "restaurantapp-c2ed6",
//   storageBucket: "restaurantapp-c2ed6.appspot.com",
//   messagingSenderId: "174416156605",
//   appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",

apiKey: "AIzaSyD93UlsOTsVwYi2-NlfYkqVUPF0g1tZsk0",
authDomain: "resturantapp-353b4.firebaseapp.com",
databaseURL: "https://resturantapp-353b4-default-rtdb.firebaseio.com",
projectId: "resturantapp-353b4",
storageBucket: "resturantapp-353b4.appspot.com",
messagingSenderId: "908565495826",
appId: "1:908565495826:web:44808c2272189955f0d8cb"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
