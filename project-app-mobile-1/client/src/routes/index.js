import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { Auth } from "../helpers/context";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  const { auth, loading } = useContext(Auth.Context);




  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return auth ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
