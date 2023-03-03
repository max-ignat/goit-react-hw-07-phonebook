export const getAllContacts = ({contacts}) => contacts.items;

export const getfilteredContacts = ({filter, contacts}) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) 
    );
  });

  return result;
};
