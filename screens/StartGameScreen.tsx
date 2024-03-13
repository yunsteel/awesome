import { FC, useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

interface Props {}

const StartGameScreen: FC<Props> = () => {
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
  };

  return (
    <View style={styles.container}>
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
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 30,
    alignItems: "center",
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
    columnGap: 8,
  },
  buttonWrapper: {
    flex: 1,
  },
});
