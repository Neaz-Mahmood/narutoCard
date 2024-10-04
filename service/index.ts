import axios from 'axios';
const baseUrl = 'https://narutodb.xyz/api';

const axiosInstance = axios.create({ baseURL: baseUrl });


export const getAllCharacters = () => {

axiosInstance.get('/character').then((response) => {
  return response.data;
}).catch((error) => {
  console.error(error);
});
 
}