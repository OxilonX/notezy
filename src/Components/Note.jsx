import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useEffect } from "react";
import NotesContext from "../Contexts/NotesContextProvider";
export default function Note({ note, selected, setSelected, show }) {
  const { setNotes } = useContext(NotesContext);

  function handleDeleteNoteClick(e) {
    e.stopPropagation();
    setNotes((prev) => prev.filter((n) => n.id !== note.id));
  }
  function handleNoteClick(e) {
    if (e.target.classList.contains("delete-btn")) return;
    setSelected(note);
    show(true);
  }

  return (
    <>
      <div
        onClick={(e) => {
          handleNoteClick(e);
        }}
        className="flex items-center cursor-pointer  gap-10 bg-sec-bgc text-white p-6 rounded-md"
      >
        <IconButton
          className="delete-btn"
          onClick={(e) => handleDeleteNoteClick(e)}
          aria-label="delete-note"
        >
          <CloseIcon color="primary" fontSize="large" />
        </IconButton>
        <div className="flex flex-col items-start">
          <h2 className="text-gray-300 text-2xl text-left">{note.title}</h2>
          <p className="text-gray-200 text-[0.6rem] opacity-75 text-left">
            {note.time}
          </p>
        </div>
      </div>
    </>
  );
}
