import * as React from "react";
import { SafeAreaView } from "react-native";

import Application from "./src/router/index";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Application />
    </SafeAreaView>
  );
}

export default App;
