import axios from "axios"
import base64 from 'react-native-base64'
import Paths from '../paths.json'

const api = axios.create({baseURL: Paths.server})

const Request = async (username, password) => {
  const token = base64.encode(`${username}:${password}`);

  //prettier-ignore
  return await api.get(Paths.login, {headers: {authorization:`Basic ${token}` }})
};

export default Request;
