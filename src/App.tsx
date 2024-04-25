import React, { useEffect, useState } from "react"; 
import "./App.css";
import { Appbar } from "./components/appbar/appbar";
import { MainPages } from "./components/main";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"; 

function generateRandom8Digits() { 
  const randomNum = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
 
  return randomNum.toString().padStart(8, '0');
}


function App() {
  const token = localStorage.getItem("token");

  const random8DigitNumber = generateRandom8Digits();
  console.log(random8DigitNumber);
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL('https://pdn-e7obvfsw7gvta3ekpglhbt7rirfkn3hh.login.aws.us.pangea.cloud/component/callback?code=poc_oczk6ybjlgcha4mzxxgd5hsolzmmzvwe&state=pcb_t4hbztzvkxt3i3xw42wsnztys2kyvvks');
    const searchParamsString = url.search;

    const urlParams = new URLSearchParams(searchParamsString)
    const codeParam = urlParams.get('code');
    console.log("codeParam", codeParam);
    if (codeParam) { 
      localStorage.setItem('token', codeParam); 
      // navigate("/")
    }
  }, []);


  return (
    <>
   
      {!token ? (   
        window.location.href =`https://pdn-e7obvfsw7gvta3ekpglhbt7rirfkn3hh.login.aws.us.pangea.cloud/authorize?state=${random8DigitNumber}`
      ) : (
        <>
          <Appbar />
          <MainPages />
        </>
      )}{" "}
    </>
  );
}

export default App;
