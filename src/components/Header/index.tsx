import React, { useState } from 'react';

import Logo from '../../assets/logo.svg'
import {Container,Content} from './styles'
import { Modal} from 'react-modal'

export function Header() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return(
  <Container>
    <Content>
    <img src={Logo} alt="dtmoney"/>
    <button type="button" onClick={handleOpenNewTransactionModal}>
      nova transação
    </button>
    <Modal isOpen={isNewTransactionModalOpen}>
      <h2>Cadadstrar transaçãop</h2>
    </Modal>
    </Content>
 
  </Container>
  )
}