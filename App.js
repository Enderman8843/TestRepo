import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Title Msg",
      "Here is the Alert!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok", onPress: () => console.log("OK Pressed") }
      ]
    );



  return (
    <View style={styles.container}>
      <Button title={"Click to alert"} onPress={createTwoButtonAlert} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
    
  }
});

export default App;