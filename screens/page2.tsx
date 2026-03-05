import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Page2Screen({ route, navigation }) {
  const email = route.email;
  const [desserts, setDesserts] = useState([]);
  const fetchDesserts = async () => {
    const dessertsCol = collection(db, "desserts");
    const dessertSnapshot = await getDocs(dessertsCol);
    const dessertList = dessertSnapshot.docs.map((doc) => doc.data());
    setDesserts(dessertList);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigation.navigate("page1");
      } else {
        fetchDesserts();
      }
    });
    return unsubscribe;
  }, []);


  return (
    <View style={styles.viewStyle}>
      <Text>Page 2</Text>
      <Text>Bienvenue {email}</Text>
      <Text style={styles.title}>Liste des desserts</Text>
      <FlatList
        data={desserts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.idDessert} - {item.libelleDessert}
          </Text>
        )}
      />

      <Button
        color="gray"
        title="vers page 1"
        onPress={() => navigation.navigate("page1")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  item: { fontSize: 18, marginBottom: 10 },
});