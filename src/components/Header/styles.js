import styled from "styled-components"


export const HeaderContainer = styled.div`
  background: ${props => props.theme.colorHeader};
  color: ${(props => props.theme.color)};

  height: 4.5rem;

  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2{
    font-weight: 700;
    color: ${props => props.theme.colorLogoPokemon};
    transition: all 0.2s;

    &:hover{
      opacity: 0.9;
      transform: scale(1.09);
    }
  }
`