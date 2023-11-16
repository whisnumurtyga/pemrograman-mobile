import React, { Component } from "react";
import { View } from "react-native";

class Separator extends Component {
  render() {
    const { height } = this.props;
    return <View style={{ height }}></View>;
  }
}

export default Separator;
