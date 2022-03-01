import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { Auth } from "../../helpers/context";

export default function () {
  const { Logout } = useContext(Auth.Context);

  const handleLogout = async () => {
    await Logout();
  };

  return (
    <View>
      <Button title="dashboard" onPress={handleLogout} />
    </View>
  );
}
