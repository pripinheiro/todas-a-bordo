import React from 'react';
import banner from '../../assets/banner-main.png';
import { Container } from './styles';


const BannerMain: React.FC = () => {

  return (
    <Container>
      <img src={banner} alt="Todas a bordo" />
    </Container>
  )
};

export default BannerMain;
