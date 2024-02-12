import { FC, PropsWithChildren } from "react";
import { Text, View } from "react-native";

interface Props {}

const PrimaryButton: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
