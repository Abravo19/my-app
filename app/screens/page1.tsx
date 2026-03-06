import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Page1Screen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('page2', { email });
      })
      .catch((error) => {
        Alert.alert("Erreur de connexion", error.message);
      });
  };

  return (
    <View style={styles.styleView}>
      <Text>Page 1</Text>

      <Image
        source={{ uri: "https://yn.free.nf/wp/wp-content/uploads/2024/12/logo-btssio.png" }}
        style={{ width: 400, height: 200 }}
      />

      <TextInput
        style={styles.inputStyle}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.inputStyle}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={{ width: "80%" }}>
        <Button
          color="#333"
          title="SE CONNECTER"
          onPress={handleLogin}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  styleView: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: "80%",
    height: 45,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  input: { width: "80%", height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 8, marginVertical: 10, backgroundColor: "white", },

});
