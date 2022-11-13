import React from "react";
import PropTypes from "prop-types";
import { MdDoNotDisturb } from "react-icons/md";

function ArchiveButton() {
  return (
    <React.StrictMode>
      <button
        className="w-1/2 mx-1 h-10 bg-teal-700 text-white font-bold text-lg rounded-md flex items-center text-center justify-center"
        disabled
      >
        Archived
        <MdDoNotDisturb />
      </button>
    </React.StrictMode>
  );
}

ArchiveButton.prototype = {
  id: PropTypes.string.isRequired,
  Arsipkan: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
