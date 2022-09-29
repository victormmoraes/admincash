import { useContext} from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);
  
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