import React from 'react'
import { Button, Container, Form } from 'semantic-ui-react';

const AuthenticationPage = ({ children }) => {
  return (
    <Container style={{ padding: '10em' }}>

      <img className=''
        style={{ width: '150px', margin: '0 auto', display: 'block' }}
        src="./logo192.png" alt="" />
      {children}
      <div>
      </div>
    </Container>
  )
}

export default AuthenticationPage