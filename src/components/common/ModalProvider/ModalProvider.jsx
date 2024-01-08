import { createContext, useState, useCallback } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const toggleModal = useCallback((modal = null) => setModal(modal), []);

  return (
    <ModalContext.Provider value={toggleModal}>
      {children}
      {modal && modal}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
