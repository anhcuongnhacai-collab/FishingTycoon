// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase, ref, push, onValue, set, get } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

// Đã thay đổi sang thông tin Firebase mới của bạn
const firebaseConfig = {
  apiKey: "AIzaSyABaaEBwnL65YiitN5w5_BPAE4QQDfo-5s",
  authDomain: "fishingtycoon-c2fc9.firebaseapp.com",
  databaseURL: "https://fishingtycoon-c2fc9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fishingtycoon-c2fc9",
  storageBucket: "fishingtycoon-c2fc9.appspot.com",
  messagingSenderId: "792471669858",
  appId: "1:792471669858:web:117186ceaa139bfd3a953b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue, set, get };