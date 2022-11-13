import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "../Event/DeleteButton";
import ArchiveButton from "../Event/ArsipButton";
import showDate from "../Utils/Date";

function NoteItem({ id, title, body, createdAt, Hapus }) {
  return (
    <article className="lg:mx-2 my-3 md:mx-2 sm:mx-2">
      <div className="text-sm shadow drop-shadow-2xl rounded-md p-3 border-slate-500 border-2">
        <div className="card-body">
          <h5 className="text-2xl text-indigo-600 break-all">{title}</h5>
          <h6 className="text-md text-indigo-600">{showDate(createdAt)}</h6>
          <p className="text-[18px] font-semibold text-indigo-600 break-all">
            {body}
          </p>
          <div className="flex justify-between mt-4">
            <DeleteButton id={id} Hapus={Hapus} />
            <ArchiveButton />
          </div>
        </div>
      </div>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  Hapus: PropTypes.func.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default NoteItem;
