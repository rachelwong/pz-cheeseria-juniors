import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  z-index: -1;

  button {
    border-radius: 0 0 20px 20px;
    z-index: 10;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;

export const DialogImage = styled.div`
  display:block;
  max-width: 50%;
  width: 100%;

  img {
    object-fit: cover;
    display:block;
    width: 100%;
    height: 100%;
  }
`