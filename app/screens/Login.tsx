import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    console.log("Email:", email);
    console.log("Senha:", senha);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite suas credenciais</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});
