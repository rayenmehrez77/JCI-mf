import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUIMf-gs9aiXtOzt_j25Q_gAiDXgC0c0w",
  authDomain: "jci-mf.firebaseapp.com",
  projectId: "jci-mf",
  storageBucket: "jci-mf.appspot.com",
  messagingSenderId: "445680748682",
  appId: "1:445680748682:web:83b16adadce458d627c573",
};

initializeApp(firebaseConfig);

// const db = getFirestore();

// const colRef = collection(db, "emails");
// const colRefS = collection(db, "suggestions");

// getDocs(colRefS).then((snapshot) => {
//   let sugggestions = [];

//   snapshot.docs.forEach((doc) => {
//     sugggestions.push({ ...doc.data(), id: doc.id });
//   });

//   console.log(sugggestions);
// });
