import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PostForm from "./pages/PostForm";
import NoteList from "./pages/NoteList";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PostForm />} />
            <Route path="/notes" element={<NoteList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
