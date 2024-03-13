import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        colors={["#fcba03", "purple"]}
        style={styles.startGameScreen}
      >
        <ImageBackground
          source={require("./assets/images/miyako.png")}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
          style={styles.startGameScreen}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  startGameScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
