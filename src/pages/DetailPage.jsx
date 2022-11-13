import React from "react";
import { useParams } from "react-router-dom";
import TitleComponent from "../component/TitleComponent";
import { detailNotes } from "../Utils/api";
import showDate from "../Utils/Date";

function DetailPage() {
  const [notes, setNotes] = React.useState([]);
  const { id } = useParams("");
  const data = notes;

  React.useEffect(() => {
    if (id) {
      detailNotes(id).then(({ data }) => {
        setNotes(data);
      });
    }
  }, [id]);

  return (
    <div className="lg:px-20 px-4">
      <div className="flex items-center py-2 justify-between border-b-2 border-indigo-800">
        <TitleComponent>Detail Note</TitleComponent>
      </div>
      <article className="lg:mx-2 my-3 md:mx-2 sm:mx-2 flex justify-center items-center ">
        <div className="text-sm shadow drop-shadow-2xl rounded-md p-3 border-slate-500 border-2 w-1/2">
          <div className="card-body">
            <h5 className="text-2xl text-indigo-600 break-all">{data.title}</h5>
            <h6 className="text-md text-indigo-600">
              {showDate(data.createdAt)}
            </h6>
            <p className="text-[18px] font-semibold text-indigo-600 break-all">
              {data.body}
            </p>
            <div className="flex justify-between mt-4"></div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default DetailPage;
