import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

interface Props {
  onRestart: () => void;
}

const GameOverScreen: FC<Props> = ({ onRestart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>게임조이고</Text>
      <View style={styles.buttonContainer}>
        <Button title="다시하기" color={Colors.purple400} onPress={onRestart} />
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 30,
  },
  text: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
