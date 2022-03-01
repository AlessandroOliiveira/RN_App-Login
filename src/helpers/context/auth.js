import { useState, useEffect, createContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth, login } from "../api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({ user: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    (async () => {
      try {
        const result = await Auth();

        
        if (result) {
          if (result.data.auth) {
            setAuth(true);
            setData({ ...data, user: result.data.user });
          } else {
            throw new Error();
          }
        } else throw new Error();
      } catch (error) {
        console.log(error);
        setAuth(false);
        await AsyncStorage.clear();
      }
      setLoading(false);
    })();
  }, []);

  const Login = async ({ email, password }) => {
    try {
      const result = await login(email, password);

      if (!result)
        throw new Error("Erro no servidor, tente novamente mais tarde.");

      const { status, data } = result;

      if (status !== 200) throw new Error("Email ou senha inválida.");


      await AsyncStorage.setItem("access_key", data.auth);

      setData((prevValues) => {
        const update = { ...prevValues };
        update.user = data.user;
        return update;
      });
      setAuth(true);
      console.log(data.user);

      return { status: 200, response: "ok" };
    } catch (error) {
      return { status: 404, response: error.message };
    }
  };

  const Logout = async () => {
    await AsyncStorage.clear();
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ auth, data, loading, setLoading, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
