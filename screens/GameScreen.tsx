import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberText from "../components/game/NumberText";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return random;
};

interface Props {
  userNumber: number;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: FC<Props> = ({ userNumber }) => {
  const [guess, setGuess] = useState(
    generateRandomBetween(minBoundary, maxBoundary, userNumber)
  );

  const handleNextGuess = (direction: "up" | "down") => {
    if (direction === "up") {
      setGuess(generateRandomBetween(guess, maxBoundary, userNumber));
    } else {
      maxBoundary = guess - 1;
      setGuess(generateRandomBetween(minBoundary, guess, userNumber));
    }
  };

  return (
    <View style={styles.container}>
      <Title>맞춰보자</Title>
      <NumberText>{guess}</NumberText>
      <View style={styles.subContainer}>
        <Text>업? 다운?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => handleNextGuess("up")}>+</PrimaryButton>
          <PrimaryButton onPress={() => handleNextGuess("down")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 30,
  },
  subContainer: {
    alignItems: "center",
    rowGap: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
  },
});
