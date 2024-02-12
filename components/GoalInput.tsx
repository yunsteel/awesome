import { FC, useEffect, useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface Props {
  visible: boolean;
  onSubmit: (text: string) => void;
  onCloseModal: () => void;
}

const GoalInput: FC<Props> = ({ visible, onSubmit, onCloseModal }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
    onCloseModal();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/miyako.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="입력해라"
          onChangeText={setInputValue}
          value={inputValue}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="닫을거면 클릭해라"
            onPress={onCloseModal}
            color="darkred"
          />
          <Button title="추가해라" onPress={handleSubmit} color="black" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 10,
    borderBottomColor: "lightgray",
    paddingHorizontal: 20,
    marginBottom: 10,
    gap: 20,
    backgroundColor: "indigo",
  },
  textInput: {
    borderColor: "black",
    width: "80%",
    marginRight: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    columnGap: 16,
  },
  image: {
    width: 400,
    borderRadius: 10,
  },
});
