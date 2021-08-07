import styled from 'styled-components';

export const SLMDiv = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  margin: 20px 0px;
  align-items: center;
  justify-content: center;
`;

export const SLMBtn = styled.button`
  margin: 0px 8px;
  position: relative;
  padding: 7px 20px;
  font-size: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #000;
  z-index: 1;
  background-color: #fff;
  transition:  all .5s ease;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000;
    display: block;
    width: 0;
    height: 100%;
    transition: all .5s ease; 
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
`;
