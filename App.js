import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGols, setCourseGols] = useState([]);
  const [modelIsVisible, setModalIsVisible] = useState(false);

  //Enable the Modal Screen
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  //Disable the Model Screen
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGols((currentCouseGoals) => [
      ...currentCouseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGols((currentCouseGoals) => {
      return currentCouseGoals.filter((goal) => goal.id !== id);
    });
  }

  //Don't forgets to add a key, to identify objets as unic
  //For the code code work well in two platform, use the "View" component always that's need
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.buttonView}>
          <Button
            title="Add New Goal"
            color="#007f5c"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          showModel={modelIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.golsContainer}>
          <FlatList
            data={courseGols}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 70,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  golsContainer: {
    flex: 8,
  },
  buttonView: {
    margin: 6,
    marginBottom: 30
  },
});
