import React from "react";

const getData = () => {
    fetch("http://localhost:8085/my", {
        method: "GET",
        credentials: "include",
    })
        .then((res) => res.json())
        .then((data) => {
            alert(JSON.stringify(data, null, 2)); // JSON 데이터를 보기 쉽게 변환
        })
        .catch((error) => alert("Error: " + error));
};

function DataButton() {
    return (
        <button onClick={getData} style={{ margin: "10px", padding: "10px" }}>
            GET DATA
        </button>
    );
}

export default DataButton;
