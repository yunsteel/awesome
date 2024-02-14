import { FC, PropsWithChildren } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props extends PressableProps {}

const PrimaryButton: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={() => console.log("pressed!")}
        android_ripple={{ color: "lightgray" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "darkgreen",
    elevation: 2,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
