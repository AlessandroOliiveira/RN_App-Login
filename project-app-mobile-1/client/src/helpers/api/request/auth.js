import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Paths from '../paths.json'

const api = axios.create({baseURL:Paths.server})

const Request = async () => {
  const token = await AsyncStorage.getItem("access_key");

  alert(token)

  //prettier-ignore
  return await api.get(Paths.auth, {headers: {authorization: `Bearer ${token}` }})
};

export default Request;
