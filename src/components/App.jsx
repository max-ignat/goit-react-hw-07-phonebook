import React, { useState, useEffect } from 'react';
import { Box } from '../App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import Modal from './Modal';
import { ModalButton } from './Modal/Modal.styled';
import { Title } from './Form/Form.styled';
import { useSelector, useDispatch } from 'react-redux'; 
// import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import {
  // getAllContacts,
  getfilteredContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { fetchAllContacts , fetchAddContact , fetchDeleteContact} from 'redux/contacts/contacts-operations';

const App = () => {
  const contacts = useSelector(getfilteredContacts); 
  const filter = useSelector(getFilter);
  const dispatch = useDispatch(); 
  const [showModal, setShowModal] = useState(false);
// console.log(contacts)
  const toggleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
 useEffect(() => {
   dispatch(fetchAllContacts())
 }, [dispatch]);
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const lowerCasedName = name.toLowerCase();

    let added = contacts.find(
      contact => contact.name.toLowerCase() === lowerCasedName
    );
    if (added) {
      alert(`${name}  is already in contacts`);
      return;
    }

    // dispatch(addContact({ name, number }));
    dispatch(fetchAddContact({ name, number }));
    toggleModal();
  };

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
    console.log('deleted');
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
    // setFilter(target.value);
  };

  const filteredContacts = () => {
  const lowerCasedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCasedFilter)
  );
};




  return (
    <Box>
      <Title>Phone Book</Title>
      <ModalButton type="button" onClick={toggleModal}>
        Add contact
      </ModalButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Form submitPropValue={handleAddContact} />
          <ModalButton type="button" onClick={toggleModal}>
            minimize
          </ModalButton>
        </Modal>
      )}
      <Filter value={filter} onChange={changeFilter} />
      <Contacts
        contacts={filteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </Box>
  );
};
export default App;
