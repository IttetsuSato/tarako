// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreInput = document.querySelector(".scoreInput");
const scoreSubmit = document.querySelector(".scoreSubmit");
const scoreList = document.querySelector(".scoreList");

const onScoreSubmit = () => {
  console.log(scoreInput.value);
};
scoreSubmit.addEventListener("click", onScoreSubmit);

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
