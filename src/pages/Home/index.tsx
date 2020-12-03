import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logoImg.png';

import BannerMain from '../../components/BannerMain';
import { Container, Header, HeaderContent, Footer, Content } from './styles';

const Home: React.FC = () => {

  return (
    <Container>


      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Todas a bordo" />

          <div>
            <Link to={'/'}>
              <strong>Home</strong>
            </Link>
            <Link to={'/'}>
              <strong>Blog</strong>
            </Link>
            <Link to={'/'}>
              <strong>Contato</strong>
            </Link>
          </div>
        </HeaderContent>
      </Header>
      <BannerMain />
      <Content>
        <p>Conteúdo principal</p>
      </Content>
      <Footer>
        <p>Rodapé</p>
      </Footer>
    </Container>
  )
};
export default Home;
