import styled from 'styled-components';

export const Container = styled.div``;
export const Header = styled.div`
  padding: 32px 0;
  background: #000000;

`;
export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;

    > img {
    height: 150px;
  }

  div {
    margin-left: auto;
    margin-top: 120px;

    strong {
    font-size: 20px;
    color: #f741ad;
    margin-left: 10px;
    text-decoration: none;

      &:hover {
        opacity: 0.8;
      }

      a {
        text-decoration: none;
      }

    }
  }
`;

export const Content = styled.div`
  max-width: 1800px;
  height: 400px;
  border: 12px solid green;
`;

export const Footer = styled.div`
  max-width: 1800px;
  height: 100px;
  border: 12px solid blue;
`;
