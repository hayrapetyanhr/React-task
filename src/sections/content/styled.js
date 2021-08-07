import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
`;

export const SIMGDIV = styled.div`
  width: 50%;
  height: 200px;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 0px;
    transition: all 0.5s ease;
  }
  @media(min-width: 576px) {
    width: 33%
  }
  @media(min-width: 991px) {
    width: 25%
  }
  @media(min-width: 1200px) {
    width: 20%
  }
`;

export const SIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;