//MUI Components imports
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

//MUI Icons imports
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";

//Project Components imports
import Note from "../Components/Note";

//React utilities
import { useState, useContext } from "react";
import NotesContext from "../Contexts/NotesContextProvider";

export default function Notes() {
  const { notes, setNotes } = useContext(NotesContext);
  const [noteTitleInput, setNoteTitleInput] = useState("");
  function handleAddNoteBtnClick() {
    if (!noteTitleInput.trim()) return;
    console.log(notes);
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
    setNoteTitleInput("");
  }
  const notesUI = notes.map((n) => {
    return <Note key={n.id} note={n} />;
  });
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
        <div action="">
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
                defaultValue=""
                size="medium"
                color="primary"
                variant="filled"
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
              >
                add Note
              </Button>
            </Grid>
          </Grid>
        </div>

        {/* {Note Dialog} */}
        <Dialog fullWidth maxWidth="lg" className="scrolling ">
          <DialogContent className="bg-[#f0f4c3] ">
            <Stack direction={"row"} justifyContent={"space-between"}>
              <div className="px-2">
                <h1 className="text-4xl ">note.title</h1>
                <p>t.time</p>
              </div>
              <IconButton>
                <DoneIcon fontSize="large" />
              </IconButton>
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
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
