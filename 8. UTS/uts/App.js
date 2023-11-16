import React, { Component } from "react";
import { View, Image, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import FunctionalComponent from "./screens/functional_component";
import ClassComponent from "./screens/class_component";
import News from "./screens/news";
import NewsDetail from "./screens/news_detail";

import LogoImage from './assets/IF.png';
import BackButtonImage from './assets/arrow.png'; // Ganti dengan path gambar tombol "back" yang sesuai




const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    const headerStyle = {
      headerTitleStyle: { color: "black" },
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "#a89008",
      headerBackImage: () => (
        <Image
          source={BackButtonImage} // Gunakan gambar tombol "back" yang telah Anda import
          style={{ width: 50, height: 50, marginLeft: 10 }} // Sesuaikan ukuran dan posisi gambar sesuai kebutuhan Anda
        />
      ),
    };

    return (
      <NavigationContainer>
        <StatusBar style='auto' backgroundColor='white' />
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'UTS PemMob by Whisnu',
              headerTitleAlign: 'center',
              headerLeft: () => (
                <View style={{ paddingLeft: 10 }}>
                  <Image source={LogoImage} style={{ width: 20, height: 30 }} />
                </View>
              ),
              ...headerStyle,
            }}
          />

          <Stack.Screen
            name="FunctionalComponent"
            component={FunctionalComponent}
            options={{
              title: "Functional Component",
              ...headerStyle,
            }}
          />

          <Stack.Screen 
            name="ClassComponent"
            component={ClassComponent}
            options={{
              title: "Class Component",
              ...headerStyle,
            }}
          />

          <Stack.Screen
            name="News"
            component={News}
            options={{
              title: "List Berita",
              ...headerStyle,
            }}
          />

          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              title: "Detail Berita",
              ...headerStyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;