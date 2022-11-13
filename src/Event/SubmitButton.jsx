import React from "react";

function SubmitButton() {
  return (
    <React.StrictMode>
      <button
        type="submit"
        className="w-full h-10 text-white font-bold text-md rounded-md bg-teal-700"
      >
        Buat
      </button>
    </React.StrictMode>
  );
}

export default SubmitButton;
