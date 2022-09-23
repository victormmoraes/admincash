import Modal from 'react-modal';

//A Modal, para funcionar, depende das props isOpen (um boolean) e onRequestClose, uma função que seta o estado para falso
//Criamos a interface então, esperando receber esses tipos de dados na nossa aplicação.
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

//Desestruturamos as props de nossa interface e utilizamos na Modal
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
  // Do lado direito são as props do componente Modal, que vem da importação de react-modal
  //Do lado esquerdo, o que estamos passando pra dentro desse componente
  //Nesse caso, o booleano isOpen e a função onRequestClose (ambos controlados lá no componente pai, o App)
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar transação</h2>
    </Modal>

  );
}