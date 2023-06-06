import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Login"); // Navigate to the 'Login' screen
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? "rgb(219, 120, 74)" : "rgb(247, 124, 67)",
        },

      ]}


      onPress={handlePress}>
      <Text style={styles.buttonText}>Log Out</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 110,
    padding: 9,
    backgroundColor: "rgb(247, 124, 67)",
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 30,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#fff",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },
});

export default LogoutButton;
