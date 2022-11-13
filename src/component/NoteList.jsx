import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ Notes, Hapus }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
      {Notes.map((note) => (
        <NoteItem key={note.id} Hapus={Hapus} {...note} />
      ))}
    </div>
  );
}

NoteList.propType = {
  Notes: PropTypes.func.isRequired,
  Hapus: PropTypes.func.isRequired,
};

export default NoteList;
