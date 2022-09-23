import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

//A Modal, para funcionar, depende das props isOpen (um boolean) e onRequestClose, uma função que seta o estado para falso
//Criamos a interface então, esperando receber esses tipos de dados na nossa aplicação.
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

//Desestruturamos as props de nossa interface e utilizamos na Modal
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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

      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
        />

        <input
          type="number"
          placeholder='Valor'
        />

        <TransactionTypeContainer>
          <button
            type='button'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type='button'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  );
}