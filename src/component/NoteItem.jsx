import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteButton from "../Event/DeleteButton";
import ArchiveButton from "../Event/ArsipButton";
import showDate from "../Utils/Date";

function NoteItem(props) {
  return (
    <article className="lg:mx-2 my-3 md:mx-2 sm:mx-2">
      <div className="text-sm shadow drop-shadow-2xl rounded-md p-3 border-slate-500 border-2">
        <div className="card-body">
          <Link
            to={"/Detail/" + props.id}
            className="text-2xl text-indigo-600 break-all underline"
          >
            {props.title}
          </Link>
          <h6 className="text-md text-indigo-600">
            {showDate(props.createdAt)}
          </h6>
          <p className="text-[18px] font-semibold text-indigo-600 break-all">
            {props.body}
          </p>
          <div className="flex justify-between mt-4">
            <DeleteButton id={props.id} Hapus={props.Hapus} />
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
