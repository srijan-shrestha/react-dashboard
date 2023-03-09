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
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    const newNote: Note = { id: nanoid(), content: inputValue };
    setNotes([...notes, newNote]);
    setInputValue("");
  };

  const handleDeleteNote = (id: string) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  return (
    <div>
      {/* <h2>Notes</h2> */}
      <div className="bg-bieze">
        <div className="max-w-2xl mx-auto py-8 p-4">
          <h2 className="text-3xl font-bold mb-8">Notes</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter note here..."
              className="w-full h-12 focus:outline-none active-outline-none"
            />
            <button
              onClick={handleAddNote}
              className="bg-bieze text-white px-4 py-2 rounded mt-2"
            >
              Add Note
            </button>
          </div>
          <ul>
            {notes.map((note) => (
              <li
                key={note.id}
                className="bg-white p-4 rounded-lg shadow-lg mb-2"
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
