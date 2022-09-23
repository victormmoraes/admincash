import Modal from 'react-modal';
import { Container, RadioButton, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';

//A Modal, para funcionar, depende das props isOpen (um boolean) e onRequestClose, uma função que seta o estado para falso
//Criamos a interface então, esperando receber esses tipos de dados na nossa aplicação.
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

//Desestruturamos as props de nossa interface e utilizamos na Modal
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  //Criamos variáveis no estado para cada input
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  //Criamos no estado uma variável para armazenar o tipo (entrada ou saída) escolhido pelo usuário
  const [type, setType] = useState('deposit');

  //Função para lidar com a ação de clique do usuário
  function handleCreateNewTransaction(event: FormEvent) {
    //Prevenir o comportamento padrão
    event.preventDefault();

    console.log({
      title,
      value,
      category,
      type
    }
    )

  }

  return (
    // Do lado direito são as props do componente Modal, que vem da importação de react-modal
    //Do lado esquerdo, o que estamos passando pra dentro desse componente
    //Nesse caso, o booleano isOpen e a função onRequestClose (ambos controlados lá no componente pai, o App)
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        {/* 
          Os inputs recebem no value o valor padrão da variável armazenada no estado.
          O método onChange por padrão possui o event. Aproveito disso para setar o novo valor digitado
          na variável do estado.
        */}
        <input
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          {/* 
            Criamos um componente no Style Components para o botão, o RadioButton.
            Por ser um componente, pode receber propriedades. Criamos então uma interface para tipagem desses dados
            Passamos os valores, e trabalhamos com ele no arquivo style.ts          
          */}
          <RadioButton
            type='button'
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioButton>

          <RadioButton
            type='button'
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  );
}