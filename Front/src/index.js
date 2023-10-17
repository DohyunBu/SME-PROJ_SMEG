import React from "react";
import { createRoot } from "react-dom/client";
import 로그인App from "./로그인App";
import 회원가입App from "./회원가입App";
import 추천App from "./추천App";
import 사용자설정App from "./사용자설정App";
import 문의App from "./문의App";
import 아빅18App from "./아빅18App";
import 졸업18App from "./졸업18App";
import 시간표App from "./시간표App";
import 검색App from "./검색App";
import App from "./PageApp";
import { Routes, Route, BrowserRouter } from "react-router-dom";



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<로그인App />} /> 
      <Route path="/Register" element={<회원가입App />} />
      <Route path="/Setting" element={<사용자설정App />} />
      <Route path="/Qna" element={<문의App />} />

      <Route path="/Main" element={<시간표App />} />
      <Route path="/Graduate18" element={<졸업18App />} />
      <Route path="/Abeek18" element={<아빅18App />} />
      <Route path="/Recommand" element={<추천App />} />
      <Route path="/Search" element={<검색App />} />
      

      <Route path="/Test" element={<App />} />

    </Routes>
  </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
