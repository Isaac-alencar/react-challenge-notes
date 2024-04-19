import { Note } from "./Note"
import { getNotes } from "../infrastructure/getNotes";
import { saveNote } from "../infrastructure/saveNote";
import { Toast } from "./Toast";
import { useEffect, useState } from "react";
import './Layout.css';

const Layout = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dataToast, setDataToast] = useState({ isVisible: false });


    const fecthGetNotes = async () => {
        try {
            const notes = await getNotes();
            const orderedNotes = notes.reverse();
            setNotes(orderedNotes);
        } catch (error) {
            throw new Error(error);
        }
    }

    useEffect(() => {
        fecthGetNotes();
    }, []);


    const showToast = dataToast => {
        setDataToast(dataToast);
        setTimeout(() => {
            setDataToast({ isVisible: false });
        }, 3 * 1000);
    }


    const addNote = async () => {
        try {
            const response = await saveNote({ title, description });
            fecthGetNotes();

            if(response.id !== undefined) showToast({ isVisible: true, message: 'Nota adicionada!', bgColor: '#a7f5a7' });
            
        } catch(error) {
            throw new Error(error);
        }
    }

    return (
        <main>
            {
                dataToast.isVisible &&
                <Toast
                    dataToast={dataToast}
                />
            }
            <aside>
                <div className="box-input-title">
                    <input type="text" placeholder="Title" className="inputTitle" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="box-textarea">
                    <textarea placeholder="Content" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <button onClick={addNote}>Add Note</button>
                </div>
            </aside>
            <div className="notes">
                {
                    notes.length > 0 && (
                        notes.map(note => (
                            <Note
                                key={note.id.toString()}
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