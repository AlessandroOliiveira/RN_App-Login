import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";

import { Button, TextInput } from "react-native";
import { StyledContainer, InnerContainer } from "../../components/styles";
import { Auth } from "../../helpers/context/index";

const initialData = { email: "", password: "" }

export default function () {
  const [data, setData] = useState(initialData);
  const { Login } = useContext(Auth.Context);

  const handleSubmit = async () => {

    for(let x in data){
      if (!data[x]) return alert("Campos vazios não são permitidos!")
    }

    const {status, response} = await Login(data);


    if (status !== 200){

      if (status === 404) {
        return alert("Email ou senha inválida.")
      }
    }
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <TextInput
          placeholder="email"
          onChangeText={(newText) =>
            setData((data) => {
              return { ...data, email: newText };
            })
          }
          defaultValue={data.email}
        />
        <TextInput
          placeholder="password"
          onChangeText={(newText) =>
            setData((data) => {
              return { ...data, password: newText };
            })
          }
          defaultValue={data.password}
        />
        <Button title="Login" onPress={handleSubmit} />
      </InnerContainer>
    </StyledContainer>
  );
}
