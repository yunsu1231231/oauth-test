import React from "react";
import LoginButton from "./components/LoginButton";
import DataButton from "./components/DataButton";

function App() {
  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>OAuth2 & API 호출 테스트</h1>
        <LoginButton />
        <DataButton />
      </div>
  );
}

export default App;
