import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 120
  },
  logo: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.6,
    resizeMode: "contain"
  },
  buttons: {
    marginTop: windowHeight * 0.05
  },
  button: {
    marginBottom: 20
  }
});

export default styles;
