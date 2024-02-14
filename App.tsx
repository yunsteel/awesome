import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <linearGradient colors={["orange"]} style={styles.startGameScreen}>
        <StartGameScreen />
      </linearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  startGameScreen: {},
});
