import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: 80px;
  background-color: #ccc;
  margin: 0 auto;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;



  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;


`;

export const Menu = styled.div`
  padding: 20px;

  strong {
    margin-right: 20px;
  }
`;



