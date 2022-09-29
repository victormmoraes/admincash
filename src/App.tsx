import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {

  //O App, componente pai, é responsável pelas funções que os componentes vão precisar para controlar a Modal
  //Controla também a variável do State
  const [isNewTransactionSectionModalOpen, setIsNewTransactionSectionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionSectionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionSectionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      {/* 
    O componente Header, é quem possui o botão (trigger) para abrir a Modal, 
    por isso, é necessário enviar para ele a função que seta o estado da variável isNewTransactionSectionModalOpen  para true 
    */}
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      {/* 
        A Modal poderia estar em qualquer lugar da página, visto que ela sobrepõe o conteúdo com seu position fixed.
        No entanto, fica melhor organizado o código, se deixarmos ela no componente pai, quem a controla.
        Criamos então o componente NewTransactionModal que contará com a Modal do react-modal
      */}
      <NewTransactionModal
        isOpen={isNewTransactionSectionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
};