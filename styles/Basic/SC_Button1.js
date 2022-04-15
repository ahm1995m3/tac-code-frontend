import styled from "styled-components";

const SC_Button1 = styled.button`
  background-color: ${({ theme }) => theme.colors.themeBlue};

  width: 100px;
  height: 50px;
  border-style: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.35);

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.FadedBlue};
    cursor: default;
  }

  @media (max-width: 750px) {
    width: 80px;
    height: 40px;
  }
`;

export default SC_Button1;
