import { FC, PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

interface Props {}

const NumberText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberText;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    backgroundColor: Colors.purple400,
    borderColor: Colors.yellow400,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8, // not available on iOS
  },
  text: {
    color: Colors.yellow400,
    fontSize: 36,
  },
});
