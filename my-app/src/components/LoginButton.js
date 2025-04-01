import React from "react";

const onNaverLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
};

function LoginButton() {
    return (
        <button onClick={onNaverLogin} style={{ margin: "10px", padding: "10px" }}>
            NAVER LOGIN
        </button>
    );
}

export default LoginButton;
