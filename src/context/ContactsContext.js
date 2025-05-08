import React, { useState, createContext } from 'react';
export const ContactsContext = createContext();
export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const addContact = (contact) => {
        // Ideally, contact has an id
        // Save to database
        // For SQLite: execute an INSERT query here (or call a helper function).
        // For Realm: write to realm here.
        // After saving to database, update state:
        setContacts(prev => [...prev, contact]);
    };
    const updateContact = (id, newData) => {
        // Update in database (SQL UPDATE or Realm write).
        // Update state:
        setContacts(prev => prev.map(c => c.id === id ? { ...c, ...newData } : c));
    };
    const deleteContact = (id) => {
        // Delete from database (SQL DELETE or Realm write).
        // Update state:
        setContacts(prev => prev.filter(c => c.id !== id));
    };
    const value = {
        contacts, setContacts,
        addContact, updateContact, deleteContact
    };
    return (
        <ContactsContext.Provider value={value}>
            {children}
        </ContactsContext.Provider>
    );
};