import React from "react";
import { View } from "react-native";
import {
  PressableScreen,
  StackHookScreen,
  StackScreen,
  TouchableScreen,
  StackParamScreen
} from "./screens";

const App = () => {
  return (
    <View style={{ paddingTop: 0, flex: 1 }}>
      {/* Panggil Screen Komponen Di Sini */}
      {/* <PressableScreen/> */}
      <Text>Open up App.js to start working on your app!</Text>

    </View>
  );
};

export default App;
