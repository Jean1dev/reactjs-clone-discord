import React from 'react';
import { Container } from './styles';

export interface ServerButtonProps {
  hasNotification?: boolean
  isHome?: boolean
  mentions?: number
  selected?: string
}

const ServerButton: React.FC<ServerButtonProps> = ({
  hasNotification,
  isHome,
  mentions,
  selected
}) => {
  return (
    <Container
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      selected={selected ? 'active' : ''}
    >
      {isHome && <img width="48" alt="img" src="https://api.adorable.io/avatars/285/abott@adorable.png" />}
    </Container>
  )
}

export default ServerButton;