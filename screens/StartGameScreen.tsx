import { FC } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

interface Props {}

const StartGameScreen: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View>
        <PrimaryButton>다시하기</PrimaryButton>
        <PrimaryButton>확인</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "indigo",
    padding: 32,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    rowGap: 32,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomColor: "yellow",
    borderBottomWidth: 4,
    color: "yellow",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
