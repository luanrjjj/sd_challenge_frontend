import axios from 'axios';

let apiUrl = 'http://localhost:3333';

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type":"application/json",
  },
  params: {
    "api-key": "jB54VTSrJSZhG21QJ5F8K852cy8xnl8A"
  }
});

export default api;
