// App.js
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function handleNoteAdd(note) {
    setNotesArray((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function handleNoteDelete(id) {
    setNotesArray((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleNoteAdd} />
      {notesArray.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={handleNoteDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
