import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

//Interface Transaction para tipagem dos dados
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {

  //Variável no estado como array de tipo Transaction
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    //Buscando na api usando o axios
    api.get('transactions')
      //depois, consolar o conteúdo de data, em response
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {/* Map que retorna um tr para cada item no array de transactions */}
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {/* Formatando o amount usando o Intl (nativo do browser), para exibir como moeda */}
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {/* Formatando o createdAt usando o Intl (nativo do browser), para exibir como Data */}
                {new Intl.DateTimeFormat('pt-br').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}

        </tbody>

      </table>
    </Container>
  );

}