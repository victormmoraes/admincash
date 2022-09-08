import axios from "axios";

//Usando AXIOS para substituir o fetch padrão do navegador
export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})