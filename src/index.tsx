import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

//Usando o MirageJS para criar um servidor fake, que contém dados fictícios
createServer({
  //Criando um model (uma espécie de banco de dados)
  models: {
    transaction: Model,
  },

  //Inicializando o banco fake com informações pré-cadastradas
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          type: 'deposit',
          category: 'Salário',
          amount: 5000,
          createdAt: new Date('2022-09-10 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 2000,
          createdAt: new Date('2022-09-11 09:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      //Retornando todos os dados no schema transaction
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      //Recebendo os dados através do request.requestBody (nativamente uma string e parseando para JSON), salvando na const data
      const data = JSON.parse(request.requestBody)
      //Retornando os dados para dentro do schema transaction  
      return schema.create('transaction', data);
    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

