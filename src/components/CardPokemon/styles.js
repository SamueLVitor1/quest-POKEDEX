import styled from "styled-components";

export const CardContainer = styled.li`
  
  cursor: pointer;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.colorText};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid yellow;
  max-height: 12.5rem;
  min-width: 12.5rem;
  padding: 0.5rem;
  transition: transform 0.4s;

  &:hover{
    transform: scale(1.1);
  }
  
  div{
    text-transform: uppercase;
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
  }

  .types{
    margin-top: 1rem;
    display: flex;
    gap: 15px;

    span{
      border: 1px solid #44403c;
      padding: 4px;
      border-radius: 4px;
    }
  }
`