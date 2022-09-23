import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionSectionModalOpen, setIsNewTransactionSectionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionSectionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionSectionModalOpen(false)
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionSectionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
};