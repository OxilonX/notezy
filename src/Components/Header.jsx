//React Utilities imports
import { Link } from "react-router";

//Imgs imports
import logo from "../assets/icons/notezy_logo.png";

//MUI imports
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ChecklistIcon from "@mui/icons-material/Checklist";
import NotesIcon from "@mui/icons-material/Notes";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <header className="flex px-2  items-center w-full">
      <img
        src={logo}
        alt=""
        className="w-35 h-35 invert-90 justify-self-left"
      />
      <nav className="py-10 px-4  mx-auto pr-30">
        <ul className="list-none">
          <Stack direction="row" spacing={8} className="flex items-center ">
            <li>
              <Tooltip title="Notes">
                <Link to={"/"}>
                  <IconButton aria-label="notes" size="large">
                    <NotesIcon color="primary" sx={{ fontSize: 40 }} />
                  </IconButton>
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="To-Do List">
                <Link to={"/todo"}>
                  <IconButton aria-label="To-Do List" size="large">
                    <ChecklistIcon color="primary" sx={{ fontSize: 40 }} />
                  </IconButton>
                </Link>
              </Tooltip>
            </li>
          </Stack>
        </ul>
      </nav>
    </header>
  );
}
