import { nanoid } from "nanoid";
import { createContext, useContext, useEffect, useState } from "react";
import "./Note.scss";

interface Note {
  id: string;
  content: string;
}

export const NotesContext = createContext<{
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}>({
  notes: [],
  setNotes: () => {},
});

const Note = () => {
  // hook to set notes
  const [notes, setNotes] = useState<Note[]>([]);
  
  // hook to set input value
  const [inputValue, setInputValue] = useState("");

   // hook to get notes on component load
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(savedNotes);
  }, []);

   // hook to save notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // function to handle input field change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // function to handle not add button click event
  const handleAddNote = () => {
    const newNote: Note = { id: nanoid(), content: inputValue };
    setNotes([...notes, newNote]);
    setInputValue("");
  };

   // function to handle not delete button click event
  const handleDeleteNote = (id: string) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  return (
    <div>
      {/* <h2>Notes</h2> */}
      <div className="bg-secondary">
        <div className="max-w-2xl mx-auto py-8 p-4">
          <h2 className="text-3xl font-bold mb-8">Notes</h2>
          <div className=" p-4 rounded-lg shadow-lg mb-8">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter note here..."
              className="w-full h-12 focus:outline-none active-outline-none"
            />
            <button
              onClick={handleAddNote}
              className="bg-green text-white px-4 py-2 rounded mt-2"
            >
              Add Note
            </button>
          </div>
          <ul>
            {notes.map((note) => (
              <li
                key={note.id}
                className=" p-4 rounded-lg shadow-lg mb-2"
              >
                <p className="text-lg">{note.content}</p>
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  interface NoteListProps {
    handleDeleteNote: (id: string) => void;
  }

  function NoteList({ handleDeleteNote }: NoteListProps) {

    // hook to retrieve stored notes
    const { notes, setNotes } = useContext(NotesContext);

    return (
      <ul className="note-list">
        {notes.map((note) => (
          <li className="note" key={note.id}>
            <span className="note-content">{note.content}</span>
            <button
              className="delete-button"
              onClick={() => handleDeleteNote(note.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
};

export default Note;
