import { FC, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
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
  answer: number;
  onGameOver: () => void;
}

let min = 1;
let max = 100;

const GameScreen: FC<Props> = ({ answer, onGameOver }) => {
  const [guess, setGuess] = useState(generateRandomBetween(min, max, answer));

  useEffect(() => {
    if (guess === answer) {
      onGameOver();
    }
  }, [guess, answer]);

  const handleNextGuess = (direction: "up" | "down") => {
    if (
      (direction === "down" && guess < answer) ||
      (direction === "up" && guess > answer)
    ) {
      Alert.alert("거짓말!", "넌 이게 잘못됐다는 걸 알 테지.", [
        { text: "죄송합니다.", style: "destructive" },
      ]);
      return;
    }

    if (direction === "up") {
      min = guess;
    } else {
      max = guess - 1;
    }

    if (min + 1 === answer || max - 1 === answer) {
      onGameOver();
      return;
    }

    setGuess(generateRandomBetween(min, max, answer));
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
