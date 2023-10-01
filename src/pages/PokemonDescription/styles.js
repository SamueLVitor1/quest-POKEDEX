import styled from "styled-components";

export const Container = styled.div`
   min-height: 100vh;
   background: ${props => props.theme.background};
   
  div{
    padding: 1rem;
  }
`

export const ContainerPokemonDescription = styled.main`
  margin: 4rem auto;
  color: #fff;
  border-radius: 7px;
  border: 2px solid ${props => props.theme.colorText};
  background: ${props => props.theme.bgPokedex};
  min-height: 400px;
  max-width: 400px;
  display: flex;
  flex-direction: column;


  div:first-child{
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 40px;
    text-transform: uppercase;

    h2{
      font-size: 1.5rem;
    }

    img{
      width: 12.5rem;
    }
  }

  div:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    h3{
      color: #ca8a04;
    }

    div{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 12px;
      
      span{
        padding: 4px;
        border-radius: 6px;
        background: #111827;
      }
    }
  }

  div:last-child{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
      background: #111827;
      border-radius: 6px;
      margin-top: 1rem;

      span{
        font-size: 1.4rem;
        margin-bottom: 0.4rem;
      }

      p{
        font-size: 0.8rem;
      }
    }
  }
` 