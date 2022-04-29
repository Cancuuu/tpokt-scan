import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      className="px-2 py-4 bg-white rounded-xl shadow-xl transition hover:scale-110"
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};

export default Button;
