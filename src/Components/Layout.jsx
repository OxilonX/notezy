import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import NotesContext from "../Contexts/NotesContextProvider";
export default function Layout() {
  const theme = createTheme({
    status: {
      danger: "#000",
    },
    palette: {
      primary: {
        main: "#f0f4c3",
      },
    },
    components: {
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: "#2d2d2d",
            "&:hover": {
              backgroundColor: "#383838",
            },
            "&.Mui-focused": {
              backgroundColor: "#444444",
            },
            "& .MuiInputBase-input": {
              color: "#f0f4c3",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "gray",
            "&.Mui-focused": {
              color: "#f0f4c3",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            "& .MuiTouchRipple-child": {
              backgroundColor: "rgba(240, 244, 195, 0.9)!important",
            },
          },
        },
      },
    },
  });
  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <ThemeProvider theme={theme}>
        <div
          style={{ backgroundColor: "#181818" }}
          className="bg-gray-900 min-h-screen"
        >
          <Container maxWidth="xl">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </Container>
        </div>
      </ThemeProvider>
    </NotesContext.Provider>
  );
}
