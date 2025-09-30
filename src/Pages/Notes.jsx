//MUI Components imports
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
//MUI Icons imports
import AddIcon from "@mui/icons-material/Add";

//Project Components imports
import Note from "../Components/Note";
import NoteDialog from "../Components/NoteDialog";

//React utilities
import { useState, useContext, useMemo } from "react";
import NotesContext from "../Contexts/NotesContextProvider";

export default function Notes() {
  const { notes, setNotes } = useContext(NotesContext);
  const [noteTitleInput, setNoteTitleInput] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [isShowDialog, setIsShowDialog] = useState(false);
  function handleAddNoteBtnClick(e) {
    e.preventDefault();
    if (!noteTitleInput.trim()) return;
    const newNote = {
      id: crypto.randomUUID(),
      title: noteTitleInput,
      time: new Date().toLocaleString(),
      content: "",
      category: "",
    };
    setNotes((n) => {
      return [...n, newNote];
    });
    setSelectedNote(newNote);
    setIsShowDialog(true);
    setNoteTitleInput("");
  }

  const notesUI = useMemo(
    () =>
      notes.map((n) => {
        return (
          <Note
            key={n.id}
            note={n}
            show={setIsShowDialog}
            selected={selectedNote}
            setSelected={setSelectedNote}
          />
        );
      }),
    [notes]
  );
  return (
    <>
      <div className="flex flex-col gap-2 -mt-5 px-6">
        {/* {Notes} */}
        <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
          <Button variant="outlined" size="medium">
            All
          </Button>
          <Button variant="outlined" size="medium" color="secondary">
            Fav
          </Button>
          <IconButton>
            <AddIcon color="primary" fontSize="large" />
          </IconButton>
        </Stack>
        <Stack spacing={2} className="">
          {notesUI}
        </Stack>

        {/* {Add Note Form} */}
        <form>
          <Grid
            className="flex items-center fixed bottom-2 left-12  w-full"
            container
            spacing={2}
          >
            <Grid size={9} className=" text-white pb-3">
              <TextField
                className="w-full"
                label="Add a Note Title"
                id="outlined-size-small"
                size="medium"
                color="primary"
                variant="filled"
                autoComplete="off"
                value={noteTitleInput}
                onChange={(e) => {
                  setNoteTitleInput(e.target.value);
                }}
              />
            </Grid>
            <Grid size={3} className=" text-white pb-3">
              <Button
                onClick={(e) => handleAddNoteBtnClick(e)}
                variant="contained"
                className="font-[900]"
                sx={{ width: 200, height: 54 }}
                type="submit"
              >
                add Note
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* {Note Dialog} */}
        <NoteDialog
          updateNotes={setNotes}
          note={selectedNote}
          show={isShowDialog}
          setShow={setIsShowDialog}
        />
      </div>
    </>
  );
}
