import styled from '@emotion/styled';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #fff;
  border: 4px solid #fff;
  border-radius: 16px;

  transition-property: transform, box-shadow;
  transition: 0.2s ease-in-out;
  overflow: hidden;

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px gray;
  }
`;
