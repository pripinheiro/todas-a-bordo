import styled from 'styled-components';

export const Container = styled.div`


    h1 {
    text-align: center;
    padding: 20px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;

`;

export const Card = styled.div`
  margin: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: #ccc;

  img {
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin: 10px 10px;

    border: 3px solid #483D8B;
  }

`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  strong {
    font-size: 25px;
  }

  p {
    font-size: 15px;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: row;

    li {
      list-style: none;
      font-size: 25px;
      margin-right: 5px;
    }
  }

`;


