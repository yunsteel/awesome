import { FC } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  item: { id: string; text: string };
  onDeleteGoal: (id: string) => void;
}

const GoalItem: FC<Props> = ({ item, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
      <Pressable
        android_ripple={{ color: "pink" }}
        style={({ pressed }) =>
          pressed ? styles.pressedItem : styles.deleteButton
        }
        onPress={() => onDeleteGoal(item.id)}
      >
        <Text>삭제</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "yellow",
    margin: 12,
    borderRadius: 4,
    padding: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  pressedItem: {
    color: "yellow",
    padding: 40,
    fontSize: 40,
  },
  goalText: {
    color: "red",
    fontSize: 60,
  },
  deleteButton: {
    backgroundColor: "white",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    color: "darkred",
  },
});
