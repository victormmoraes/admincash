import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

//Interface Transaction para tipagem dos dados
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  //Variável no estado como array de tipo Transaction
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    //Buscando na api usando o axios
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}