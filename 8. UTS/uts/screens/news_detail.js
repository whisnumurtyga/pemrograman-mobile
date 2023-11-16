import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Separator from "../components/separator";
import Button from "../components/button";

const windowWidth = Dimensions.get("window").width;

class NewsDetail extends Component {
  render() {
    const { route } = this.props;
    const data = route.params.data;

    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <Separator height={10} />
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>{data.title}</Text>
          <Separator height={10} />
          <Text style={styles.text}>{data.content}</Text>
          <Separator height={20} />
        </View>

        <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL(data.link).catch((err) => console.error('Error', err))
        }
      >
        <Text style={styles.buttonText}>Read more</Text>
      </TouchableOpacity>
      <Separator height={50} />

      </ScrollView>
    );
  }
}

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    resizeMode: "stretch",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
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
});
