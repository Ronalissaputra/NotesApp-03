import React from "react";
import NoteForm from "../component/NoteForm";
import { addNotes } from "../Utils/api";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../component/TitleComponent";

function AddPage() {
  const navigate = useNavigate();
  async function onAddContactHandler(notes) {
    await addNotes(notes);
    navigate("/");
  }
  return (
    <div className="lg:px-20 px-4">
      <div className="py-2">
        <TitleComponent>Input Notes</TitleComponent>
      </div>
      <NoteForm addNotes={onAddContactHandler} />
    </div>
  );
}

export default AddPage;
