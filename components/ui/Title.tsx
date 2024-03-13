import { FC, PropsWithChildren } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface Props extends TextProps {}

const Title: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <Text style={styles.title} {...props}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "purple",
    textAlign: "center",
    borderWidth: 2,
    padding: 8,
    borderColor: "purple",
  },
});
