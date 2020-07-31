import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 165px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: 0.5s;
  &:hover,
  &:focus {
    transition: 0.5s;
    opacity: .7;
    
    transform: scale(0.95,0.95);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
