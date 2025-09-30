import "./App.css";
import Layout from "./Components/Layout";
import Notes from "./Pages/Notes";
import TodoList from "./Pages/TodoList";
import { Router, Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Notes />} />
          <Route path="/todo" element={<TodoList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
