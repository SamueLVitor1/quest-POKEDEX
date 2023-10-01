import pokeLupa from '../../img/poke lupa.png'
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
`

export const PokedexContainer = styled.main`
  margin: 4rem auto;
  flex: 1;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.875rem;

  input{
    padding: 8px 6px;
    border: 0;
    border: 1px solid ${props => props.theme.colorText};;
    border-radius: 4px;
    background: ${props => props.theme.colorHeader};
    color: ${props => props.theme.colorText};
  }

  ul{
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  button{
    cursor: pointer;
    border: 0;
    font-size: 0.8rem;
    font-weight: 800;
    background-color: #2563eb;
    border-radius: 6px;
    align-self: center;
    width: 200px;
   
  }
  
`