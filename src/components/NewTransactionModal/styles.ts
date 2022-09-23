import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
     width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: var(--input-background);

    font-size: 1rem;
    font-weight: 400;

     &::placeholder {
        color: var(text-body);
     }

     & + input {
          margin-top: 1rem;
     }
  }

  button[type="submit"] {
     width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    
    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  } 
`;

export const TransactionTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;
`;

//Criação da interface das propriedades do componente RadioButton
interface RadioButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

//Criação do objeto colors
const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

//Usando generic do TypeScript para 'dizer' que o botão é do tipo RadioButtonProps
export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: .25rem;

  //Uma vez podendo acessar as propriedades do componente, podemos trabalhar com os dados
  //Criamos uma arrow function na interpolação  e retornamos
  //Se isActive for true -> usamos o helper transparentize da lib polished para transparecer a cor que vem do objeto
  //colors e possui a chave que vem da prop activeColor, se não, igual a transparente
  background: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color .2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-color);
  }
`;