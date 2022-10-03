import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

//Interface Transaction para tipagem dos dados
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

//Typescript Omit -> permite selecionar uma interface e omitir alguns valores, gerando um novo tipo
type TransactionInput  = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

//Interface para tipar o contexto
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

//Criando contexto do tipo TransactionsContextData e iniciando o seu valor como um objeto de mesmo tipo
const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  //Variável no estado como array de tipo Transaction
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    //Buscando na api usando o axios
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  //Trazendo função de criação de uma nova transaction para dentro do contexto
  //tornando-a async e armazenando response em uma variável
  //desestruturando e pegando a chave transaction do data da response, e gerando o createdAt
  //setTransactions fazendo o spread, para manter os dados do array e passando novo dato (transaction)
  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const {transaction} = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={ {transactions, createTransaction} }>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}