import React from 'react';
import BannerMain from '../../components/BannerMain';
import Header from '../../components/Header';

import teste from '../../assets/teste.png';
import { Container, Footer, Content, Card } from './styles';

const Home: React.FC = () => {

  return (
    <Container>
      <Header />

        <h1>Cursos e programas</h1>

      <Content>
        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <strong>Programaria</strong>
          <button>Conheça</button>
        </Card>
        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <strong>Programaria</strong>
          <button>Conheça</button>
        </Card>
        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <strong>Programaria</strong>
          <button>Conheça</button>
        </Card>
        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <strong>Programaria</strong>
          <button>Conheça</button>
        </Card>
        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <strong>Programaria</strong>
          <button>Conheça</button>
        </Card>
        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <strong>Programaria</strong>
          <button>Conheça</button>
        </Card>
      </Content>
      <Footer>
        <p>Rodapé</p>
      </Footer>
    </Container>
  )
};
export default Home;
