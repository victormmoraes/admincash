import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    //Buscando na api usando o axios
    api.get('transactions')
    //depois, consolar o conteúdo de data, em response
    .then(response => console.log(response.data))
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$1.000</td>
            <td>Desenvolvimento</td>
            <td>10/05/2022</td>
          </tr>
          <tr>
            <td>Compras</td>
            <td className="withdraw">- R$500</td>
            <td>Casa</td>
            <td>20/05/2022</td>
          </tr>
        </tbody>

      </table>
    </Container>
  );

}