import { FC, useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../constants/colors";
import Title from "../components/ui/Title";

interface Props {
  onStartGame: (pickedNumber: number) => void;
}

const StartGameScreen: FC<Props> = ({ onStartGame }) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (text: string) => {
    setValue(text);
  };

  const handleSubmit = () => {
    const num = parseInt(value);

    if (isNaN(num) || num < 0 || num > 99) {
      // Alert.prompt
      Alert.alert(
        "얘! 죽고 싶니?", // title
        "두 자리 숫자만 입력할 수 있단다.", // message
        [{ text: "Okay", style: "destructive", onPress: () => setValue("") }] // button
      );
      return;
    }

    onStartGame(num);
  };

  return (
    <View style={styles.root}>
      <Title>숫자 맞추기</Title>
      <View style={styles.container}>
        <Text style={styles.instructionText}>숫자를 입력해라.</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={handleChangeValue}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton>다시하기</PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={handleSubmit}>확인</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  root: {
    marginVertical: 100,
    marginHorizontal: 30,
    rowGap: 20,
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.purple500,
    padding: 32,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    rowGap: 16,
  },
  instructionText: {
    color: Colors.yellow300,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomColor: Colors.yellow400,
    borderBottomWidth: 4,
    color: Colors.yellow400,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 8,
  },
  buttonWrapper: {
    flex: 1,
  },
});
