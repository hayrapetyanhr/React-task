import styled from 'styled-components';

export const SidebarSection = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
  border-bottom: 1px solid #fff;  
  background-color: #000;
  z-index: 9;
`;

export const SidebarNav = styled.ul`
  padding: 20px;
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SidebarNavItem = styled.li`
  padding: 8px 20px;
  transition: all 0.5s ease;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    display: block;
    width: 0;
    height: 100%;
    transition: all .5s ease; 
  }
  a {
    text-transform: capitalize;
    color: #fff;
    display: block;
    font-size: 18px;
    transition: all .5s ease; 
    text-decoration: none;
    position: relative;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
  &:hover a:not(.active) {
    color: #000;
  }
`;
