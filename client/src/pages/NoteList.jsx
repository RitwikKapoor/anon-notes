import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NoteList.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/api/posts`
      );
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="note-list-container">
        <h1 className="note-list-header">Recent Notes</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          notes.map((note) => (
            <div key={note._id} className="note">
              <p>{note.content}</p>
              <p className="note-date">
                {note.createdAt
                  ? new Date(note.createdAt).toLocaleDateString() +
                    " " +
                    new Date(note.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default NoteList;
