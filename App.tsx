import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.appContainer}></View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    flex: 1,
  },
});
