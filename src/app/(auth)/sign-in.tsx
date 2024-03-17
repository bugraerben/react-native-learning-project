import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import Colors from "../../constants/Colors";
import { Link, Stack } from "expo-router";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "SignIn" }} />

      <Text style={styles.welcomeText}>Welcome This App</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="test@gmail.com"
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="******"
        style={styles.input}
      />
      <Button text="SignIn" />

      <Link href="/sign-up" style={styles.textButton}>
        Create Account
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
  label: {
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
