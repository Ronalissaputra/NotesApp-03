import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../component/NoteList";
import SearchInput from "../Event/SearchInput";
import TitleComponent from "../component/TitleComponent";
import { getNotes, deleteNotes } from "../Utils/api";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNotes(id);
    const { data } = await getNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const note = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword);
  });

  const Aktif = note.filter((note) => {
    return !note.archived;
  });

  return (
    <div className="lg:px-20 px-4">
      <div className="">
        <div className="flex items-center py-2 justify-between border-b-2 border-indigo-800">
          <TitleComponent>Daftar Notes</TitleComponent>
          <SearchInput searchNotes={onKeywordChangeHandler} keyword={keyword} />
        </div>
        {Aktif.length < 1 ? (
          <h6 className="text-red-600 text-center my-16">Catatan Kosong</h6>
        ) : (
          <NoteList Notes={Aktif} Hapus={onDeleteHandler} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
