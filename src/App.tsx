import React,{useState} from 'react';
import Modal from 'react-modal'
import {GlobalStyle} from './styles/global'
import {Header} from './components/Header'
import { Dashboard } from './components/Dashboard';

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }


  return (
    <>
    <Header onOpenNewTransactionModal={handleCloseNewTransactionModal}/>
    <Dashboard/>
    <Modal 
    isOpen={isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
    >
      <h2>Cadadstrar transaçãop</h2>
    </Modal>
    <GlobalStyle/>
   </>
  );
}

export default App;
