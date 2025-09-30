import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export default function Note({ note }) {
  return (
    <>
      <div className="flex items-center justify-between gap-5 bg-sec-bgc text-white p-6 rounded-md">
        <IconButton aria-label="delete-note">
          <CloseIcon color="primary" fontSize="large" />
        </IconButton>
        <h2 className="text-gray-300 text-lg ">{note.title}</h2>
      </div>
    </>
  );
}
