import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto;
  & > div > * {
    font-size: 40px;
    font-weight: 600;
  }
  & > div > p:first-child::after {
    content: '!';
    color: rgb(231, 67, 125);
  }
  & > span {
    font-size: 27px;
    font-weight: 300;
  }
  & > span > p:first-child::before {
    content: '- ';
    color: rgb(231, 67, 125);
  }
  & > span > p:last-child {
    line-height: 40px;
  }
  & > span > p > a {
    color: rgb(231, 67, 125);
    font-weight: bolder;
  }
`;
