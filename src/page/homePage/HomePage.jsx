import React from "react";

export default function HomePage() {
  function clearLocalstorage() {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <div>
      <button
        onClick={() => {
          clearLocalstorage();
        }}
      >
        exit
      </button>
    </div>
  );
}
