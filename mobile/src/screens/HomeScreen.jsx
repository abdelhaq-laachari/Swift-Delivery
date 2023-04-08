import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Drivers from "../components/Drivers";

const HomeScreen = () => {
  return (
    <>
      <View className="w-[100%] h-screen bg-white">
        <Drivers />
      </View>
      <StatusBar style="auto" />
    </>
  );
};

export default HomeScreen;
