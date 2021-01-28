import styled from 'styled-components';

export const Container = styled.div`


    h1 {
    text-align: center;
    padding: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

`;

export const Card = styled.div`
  flex: 1 1 200px;
  margin: 10px 10px;
  width: 350px;

  background-color: tomato;

  img {
    width: 150px;
    height: 150px;
    border-radius: 75px;
  }
`;

export const Footer = styled.div`
  max-width: 1800px;
  height: 100px;
  border: 12px solid blue;
`;

