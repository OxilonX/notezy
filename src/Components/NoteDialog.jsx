import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DoneIcon from "@mui/icons-material/Done";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
export default function NoteDialog({ updateNotes, note, show, setShow }) {
  const [noteText, setNoteText] = useState("");
  function handleCheckClick() {
    setShow(false);
    updateNotes((notes) =>
      notes.map((n) => (n.id === note.id ? { ...n, content: noteText } : n))
    );
    setNoteText("");
  }
  useEffect(() => {
    if (note) setNoteText(note.content || "");
  }, [note, show]);
  function handleNoteTextChange(e) {
    setNoteText(e.target.value);
  }

  if (show)
    return (
      <Dialog
        open
        onClose={() => {
          setShow(false);
          updateNotes((notes) =>
            notes.map((n) =>
              n.id === note.id ? { ...n, content: noteText } : n
            )
          );
          setNoteText("");
        }}
        fullWidth
        maxWidth="lg"
        className="scrolling"
      >
        <DialogContent className="bg-[#f0f4c3] ">
          <Stack direction={"row"} justifyContent={"space-between"}>
            <div className="px-2">
              <h1 className="text-4xl ">{note.title}</h1>
              <p>{note.time}</p>
            </div>
            <form action="">
              <IconButton onClick={handleCheckClick}>
                <DoneIcon fontSize="large" />
              </IconButton>
            </form>
          </Stack>

          <TextField
            multiline
            fullWidth
            variant="filled"
            placeholder="Write your note here..."
            sx={{
              "& .MuiFilledInput-root": {
                backgroundColor: "#f0f4c3",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#f0f4c3",
                },
                "&.Mui-focused": {
                  backgroundColor: "#f0f4c3",
                },
                "& .MuiInputBase-input": {
                  color: "#000",
                },
              },
            }}
            onChange={(e) => {
              handleNoteTextChange(e);
            }}
            value={noteText}
          />
        </DialogContent>
      </Dialog>
    );
}
