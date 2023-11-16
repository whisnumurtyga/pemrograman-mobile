import React, { Component } from "react";
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Separator from "../components/separator";

import { HStack, VStack, NativeBaseProvider } from 'native-base';
import { Avatar, Box, FormControl, Stack, Input, WarningOutlineIcon } from "native-base";


class Home extends Component {
  render() {
    const { navigation } = this.props;
    const photo = require('../assets/whisnu.jpg');
    return (
      <ScrollView style={styles.container}>
        <NativeBaseProvider>
          <HStack justifyContent="center" space={2}>
            <Avatar 
              bg="green.500" 
              size="2xl" 
              position="center"
              wrapperRef={true} 
              style={styles.avatarStyle}
              source={photo}
            >
              Whisnumurty Galih Ananta
            </Avatar>
          </HStack>

          <Separator height={15} />

          <VStack justifyContent={"center"} alignItems="center">
            <Text style={styles.text}>Whisnumurty Galih Ananta</Text>
            <Text style={styles.text}>120321002</Text>
            <Text style={styles.text}>Pemrograman Mobile/ IF-01-02</Text>
          </VStack>
          
          <Separator height={15} />
          <Text style={styles.text}>Tanggal Lahir: 12 Juni 2003</Text>
          <Text style={styles.text}>Alamat: Mojokerto</Text>
          <Text style={styles.text}>Hobi: -</Text>
          

          <Separator height={30} />



          {/* News */}
          <TouchableOpacity onPress={() => navigation.navigate("News")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>List Berita</Text>
            </View>
          </TouchableOpacity>
          <Separator height={30} />
        </NativeBaseProvider>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "white",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 'light'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#a89008",
    borderRadius: 7,
    padding: 15,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: "bold",
  },

  avatarStyle: {
    backgroundColor: 'green',
    position: 'relative', // Diperlukan agar 'marginTop' bekerja dengan benar
    marginTop: 5, // Sesuaikan nilai ini untuk mengatur posisi gambar
  },

});

