import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from "expo-constants";

const Header = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  const apiUrl = Constants.manifest.extra.apiUrl;

  useEffect(() => {
    const getToken = async () => {
      const value = await AsyncStorage.getItem("token");
      setToken(value);
    };
    getToken();
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(`${apiUrl}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  return (
    <View className="w-[90%] h-[70px] bg-[#F8F8F8] flex flex-row justify-between items-center px-4 rounded-xl shadow-2xl shadow-black ">
      <View className="flex flex-row space-x-2">
        <Text className=" text-lg font-bold ">Hello</Text>
        <Text className=" text-lg font-bold text-red-600">{user?.fullName} </Text>
      </View>
      <View>
        <Ionicons name="menu-outline" size={30} color="black" />
      </View>
    </View>
  );
};

export default Header;
