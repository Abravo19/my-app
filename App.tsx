import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import page2Component from "./app/screens/page2";
import page1Component from "./app/screens/page1";
import page3Component from "./app/screens/page3";

// charge les bibliothèques permettant la navigation
const Stack = createNativeStackNavigator();

// charge les fichiers page1.js et page2.tsx
function MainStack() {
    return (
        <Stack.Navigator id="main-stack" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="page1" component={page1Component} />
            <Stack.Screen name="page2" component={page2Component} />
            <Stack.Screen name="page3" component={page3Component} />
        </Stack.Navigator>
    );
}

// définit le stack de pages MainStack composé des pages page1(= /screens/page1.tsx) et page2(= /screens/page2.tsx), la page 1 étant la 1ère
export default function App() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}
