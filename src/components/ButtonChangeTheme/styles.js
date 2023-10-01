import styled from "styled-components"

export const ButtonContainer = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;

  .sun{
    color: ${props=>props.theme.iconLighDarkColor};
  }

  .moon{
    color: ${props=>props.theme.iconLighDarkColor};
  }

  .moon, .sun{
    display: flex;
    align-items: center;
    padding: 2px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:hover{
      border-bottom: 2px solid ${props=>props.theme.iconLighDarkColor};
    }
  }
`