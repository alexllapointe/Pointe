import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const NoteDataAlert = ({ open, onClose, notes, setNotes, selectedDate }) => {
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        if (open) {
            setNewNote('');
        }
    }, [open]);

    const handleAddNote = () => {
        if (newNote.trim() !== '') {
            setNotes((prevNotes) => ({
                ...prevNotes,
                [selectedDate.format('YYYY-MM-DD')]: [
                    ...(prevNotes[selectedDate.format('YYYY-MM-DD')] || []),
                    newNote,
                ],
            }));
            setNewNote('');
        }
    };

    const handleRemoveNote = (index) => {
        setNotes((prevNotes) => {
            const updatedNotes = prevNotes[selectedDate.format('YYYY-MM-DD')].filter(
                (_, i) => i !== index
            );
            return {
                ...prevNotes,
                [selectedDate.format('YYYY-MM-DD')]: updatedNotes,
            };
        });
    };

    if (!open || !selectedDate) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md md:w-full w-5/6 p-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
                    <h3 className="text-lg text-midnightBlack font-semibold">Notes</h3>
                    <CloseIcon
                        onClick={onClose}
                        className="cursor-pointer text-gray-500 hover:text-red-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    {Array.isArray(notes[selectedDate.format('YYYY-MM-DD')]) &&
                        notes[selectedDate.format('YYYY-MM-DD')].map((note, index) => (
                            <div key={index} className="flex justify-between items-center py-2">
                                <span>{note}</span>
                                <button onClick={() => handleRemoveNote(index)} className="text-red-500">
                                    &times;
                                </button>
                            </div>
                        ))}
                </div>
                <div className="flex items-center pt-2 mt-2">
                    <input
                        type="text"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        className="flex-grow p-2 border-b border-gray-300 focus:outline-none focus:border-trueGreen"
                        placeholder="New Note"
                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-midnightBlack px-4 py-2 rounded-md mr-2 hover:bg-gray-100 transition duration-300"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleAddNote}
                        className="bg-trueGreen text-white px-4 py-2 rounded-md hover:bg-green-200 transition duration-300"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteDataAlert;
