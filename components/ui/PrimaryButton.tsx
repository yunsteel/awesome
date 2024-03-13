import { FC, PropsWithChildren } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";

interface Props extends PressableProps {}

const PrimaryButton: FC<PropsWithChildren<Props>> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: Colors.yellow300 }}
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
    backgroundColor: Colors.yellow400,
    elevation: 2,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: Colors.purple500,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
