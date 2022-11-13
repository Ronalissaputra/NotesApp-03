import React from "react";
import PropTypes from "prop-types";
function DeleteButton({ id, Hapus }) {
  return (
    <React.StrictMode>
      <button
        className="h-10 w-1/2 mx-1 bg-red-600 text-white font-bold text-lg rounded-md"
        onClick={() => Hapus(id)}
      >
        Delete
      </button>
    </React.StrictMode>
  );
}

DeleteButton.prototype = {
  id: PropTypes.number.isRequired,
  Hapus: PropTypes.func.isRequired,
};

export default DeleteButton;
