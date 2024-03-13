import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo, useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);

  const handleStartGame = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  const screen = useMemo(() => {
    if (userNumber) {
      return <GameScreen userNumber={userNumber} />;
    }

    return <StartGameScreen onStartGame={handleStartGame} />;
  }, [userNumber]);

  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        colors={[Colors.yellow300, Colors.purple400]}
        style={styles.startGameScreen}
      >
        <ImageBackground
          source={require("./assets/images/miyako.png")}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
          style={styles.startGameScreen}
        >
          {/* 기기에 따라 가려지는 부분이 다르니 사용해주자. */}
          <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  startGameScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
