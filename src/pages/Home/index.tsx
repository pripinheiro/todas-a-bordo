import React from 'react';
import BannerMain from '../../components/BannerMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';

import teste from '../../assets/teste.png';
import { Container, Content, Card, CardContent } from './styles';

const Home: React.FC = () => {

  return (
    <Container>
      <Header />
      <BannerMain />
        <h1>Cursos e programas</h1>

      <Content>
        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <CardContent>
            <strong>Programaria</strong>
            <p>teste teste teste teste teste teste teste teste teste teste teste teste</p>
            <ul>
              <li><FaInstagram /></li>
              <li><FaLinkedin /></li>
              <li><GoBrowser /></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <CardContent>
            <strong>Programaria</strong>
            <p>teste tetste teste</p>
            <ul>
              <li><FaInstagram /></li>
              <li><FaLinkedin /></li>
              <li><GoBrowser /></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <CardContent>
            <strong>Programaria</strong>
            <p>teste tetste teste</p>
            <ul>
              <li><FaInstagram /></li>
              <li><FaLinkedin /></li>
              <li><GoBrowser /></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <img src={teste} alt="Todas a bordo"/>
          <CardContent>
            <strong>Programaria</strong>
            <p>teste tetste teste</p>
            <ul>
              <li><FaInstagram /></li>
              <li><FaLinkedin /></li>
              <li><GoBrowser /></li>
            </ul>
          </CardContent>
        </Card>


      </Content>
      <Footer />
    </Container>
  )
};
export default Home;
