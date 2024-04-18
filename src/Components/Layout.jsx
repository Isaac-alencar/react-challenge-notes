import { Note } from "./Note"
import './Layout.css';
import { GetNotes } from "../Iinfrastructure/GetNotes";
import { useEffect, useState } from "react";

const Layout = () => {
    const [notes, setNotes] = useState([]);

    const fecthGetNotes = async id => {
        try {
            const data = await GetNotes(id);
            setNotes(data);
        } catch (error) {
            console.log('erro');
        }
    }

    useEffect(() => {
        fecthGetNotes();
    }, []);

    return (
        <main>
            <aside>
                <div className="box-input-title">
                    <input type="text" placeholder="Title" className="inputTitle" />
                </div>
                <div className="box-textarea">
                    <textarea placeholder="Content"></textarea>
                </div>
                <div>
                    <button>Add Note</button>
                </div>
            </aside>
            <div className="notes">
                {
                    notes.length > 0 && (
                        notes.map(note => (
                            <Note
                                id={note.id}
                                title={note.title}
                                description={note.description}
                            />
                        ))
                    )
                }
            </div>
        </main>
    )
}

export { Layout }