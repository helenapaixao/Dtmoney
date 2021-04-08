import React from 'react';

import Logo from '../../assets/logo.svg'

export function Header() {
  return(
  <header>
    <img src={Logo} alt="dtmoney"/>
    <button type="button">
      nova transação
    </button>
  </header>
  )
}