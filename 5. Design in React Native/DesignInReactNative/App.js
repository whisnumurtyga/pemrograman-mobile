import React from "react";
import { StatusBar, Text } from "react-native";
import {
  AlignItemsLayout,
  DirectionLayout,
  DisplayAnImageWithStyle,
  FixedDimensionsBasics,
  Flex,
  FlexDimensionsBasics,
  FlexDirectionBasics,
  JustifyContentBasics,
  LotsOfStyles,
  NativeBaseExample,
  PercentageDimensionsBasics,
  PositionLayout,
  TodoList,
  WidthHeightBasics,
} from "./screens";

const App = () => {
  return (
    <>
      <StatusBar style={{ padding: 0 }} />
      <Text>Nama: Whisnumurty Galih Ananta</Text>
      <Text>NIM: 1203210002</Text>
      {/* <LotsOfStyles/> */}
      {/* <FixedDimensionsBasics/> */}
      {/* <FlexDimensionsBasics/> */}
      {/* <PercentageDimensionsBasics/> */}
      {/* <Flex/> */}
      {/* <FlexDirectionBasics/> */}
      {/* <JustifyContentBasics/> */}
      {/* <AlignItemsLayout/> */}
      {/* <WidthHeightBasics /> */}
      {/* <PositionLayout/> */}
      {/* <DisplayAnImageWithStyle/> */}
      {/* <NativeBaseExample/> */}
      <TodoList/>
      {/* Panggil Komponen Di Sini */}

    </>
  );
};

export default App;
