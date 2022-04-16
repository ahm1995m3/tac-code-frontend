import styled from "styled-components";

const SC_Button2 = styled.button`
  background-color: white;

  width: 100%;
  height: 50px;
  border-style: none;
  color: ${({ theme }) => theme.colors.themeBlue};
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  border: solid ${({ theme }) => theme.colors.themeBlue} 2px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

  :disabled {
    background-color: ${({ theme }) => theme.colors.FadedBlue};
    cursor: default;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.themeBlue};
    color: white;
  }
`;

export default SC_Button2;
