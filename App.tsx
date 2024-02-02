import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleChangeInput = (inputText: string) => {
    setInputValue(inputText);
  };

  const handlePressButton = () => {
    setList((list) => [...list, inputValue]);
    setInputValue("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="입력해라"
          onChangeText={handleChangeInput}
          value={inputValue}
        />
        <Button title="클릭해라" onPress={handlePressButton} />
      </View>
      <View style={styles.goalsContainer}>
        {list.map((item, index) => (
          <Text key={item + index}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 10,
    borderBottomColor: "lightgray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    marginRight: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  goalsContainer: {
    flex: 4,
    backgroundColor: "pink",
  },
});
