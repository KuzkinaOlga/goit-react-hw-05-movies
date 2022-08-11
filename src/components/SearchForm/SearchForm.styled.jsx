import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  position: relative;
  margin-bottom: 40px;
`;

export const InputSearch = styled.input`
  width: 100%;

  border-style: none;
  border-bottom: 1px solid #000;
  background-color: transparent;

  padding: 16px;

  outline: none;

  font-size: 16px;
  color: #000;
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
  }
`;

export const FormBtn = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  position: absolute;
  top: 0;
  right: 0;
`;
