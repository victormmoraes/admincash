import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

//O Header precisa receber essa prop, por isso, criamos uma interface 
//para armazenar o tipo de dado que esperamos receber
//Nesse caso, esperamos receber uma função que não retorna nada, só altera mesmo a variável no estado

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

//Desestruturamos a prop do tipo HeaderProps. Utilizamos na sequência no método sintético onClick.
//Quando clicarmos no botão, essa função será disparada aqui, e a variável no estado será alterada, fazendo a modal aparecer
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}