import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGolText] = useState("");

  //Change Inicial State of 'enteredGoalText' with the input value
  function goInputHandler(enteredText) {
    setEnteredGolText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGolText("");
  }

  return (
    <Modal visible={props.showModel} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          onChangeText={goInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttomContainer}>
          <View style={styles.buttom}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.buttom}>
            <Button title="Cancel " onPress={props.onCancel} color="#f31382" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b"
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: "#cccccc",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 12,
  },
  buttomContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin:20 
  },
  buttom: {
    width: 140,
    marginHorizontal: 10,
  },
});
