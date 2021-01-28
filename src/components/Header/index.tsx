import React from 'react';
import { Link } from 'react-router-dom';


import { Container,  HeaderContent, Menu } from './styles';

const Header: React.FC = () => {

  return (
    <Container>
        <HeaderContent>
          <h1>Todas a bordo</h1>

          <Menu>
            <Link to={'/'}>
              <strong>Home</strong>
            </Link>
            <Link to={'/mission'}>
              <strong>Missão</strong>
            </Link>
            <Link to={'/contact'}>
              <strong>Contato</strong>
            </Link>
          </Menu>
        </HeaderContent>
    </Container>
  )
};
export default Header;
