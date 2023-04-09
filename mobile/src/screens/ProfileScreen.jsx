import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const value = await AsyncStorage.getItem("token");
      setToken(value);
      // destroy the token
    };
    getToken();
  }, []);
  console.log(token);

  return (
    <>
      <View>
        <Text>ProfileScreen</Text>
      </View>
      <StatusBar style="auto" />
    </>
  );
};

export default ProfileScreen;
