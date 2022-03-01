import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/";

import { Auth } from "./src/helpers/context";

export default function App() {
  return (
    <NavigationContainer>
      <Auth.Provider>
        <Routes />
      </Auth.Provider>
    </NavigationContainer>
  );
}
