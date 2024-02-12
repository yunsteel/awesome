import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState<Array<{ id: string; text: string }>>([]);

  const handleSubmit = useCallback((text: string) => {
    setList((list) => [...list, { text, id: Math.random().toString() }]);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setList((list) => list.filter((item) => item.id !== id));
  }, []);

  return (
    <>
      <StatusBar style="inverted" />
      <View style={styles.appContainer}>
        <Button
          title="목표 추가"
          color="skyblue"
          onPress={() => setIsModalOpen(true)}
        />

        <GoalInput
          onSubmit={handleSubmit}
          visible={isModalOpen}
          onCloseModal={() => setIsModalOpen(false)}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem onDeleteGoal={handleDelete} item={item} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    flex: 1,
  },

  goalsContainer: {
    flex: 4,
    backgroundColor: "pink",
  },
  goalItem: {
    backgroundColor: "yellow",
    margin: 12,
    borderRadius: 4,
    padding: 40,
  },
  goalText: {
    color: "red",
    fontSize: 60,
  },
});
