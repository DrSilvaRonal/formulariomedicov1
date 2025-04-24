// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Su configuración (reemplace con la real de su consola Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyDJvtvP1_I6HVIrJ4aE5sNj2AAx5Xg4gRc",
    authDomain: "databasersilva.firebaseapp.com",
    projectId: "databasersilva",
    storageBucket: "databasersilva.firebasestorage.app",
    messagingSenderId: "909017332492",
    appId: "1:909017332492:web:aee9d3bd5febaa3628e729",
    measurementId: "G-KK6T8ZNCNK"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la base de datos
const db = getFirestore(app);
export { db };
