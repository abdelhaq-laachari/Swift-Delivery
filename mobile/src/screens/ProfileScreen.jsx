import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from "expo-constants";
import { Ionicons, Feather } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
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
    <View className="w-full h-full bg-white flex items-center">
      <View className="w-[95%] h-[90%] bg-white flex items-center justify-between">
        <View className="w-[90%] h-[80px] mt-8 bg-white flex flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-base font-bold">My Profile</Text>
          <TouchableOpacity>
            <Feather name="more-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="w-[80%] h-[100px] bg-white flex flex-row items-center justify-between">
          <View className="flex flex-row items-center space-x-3">
            <Image
              className="w-[60px] h-[60px] rounded-full "
              source={require("../../assets/images/user.jpg")}
            />
            <Text className="text-xl font-bold">Name</Text>
          </View>
          <TouchableOpacity className="flex flex-row items-center space-x-3 border-black border px-2 py-1 rounded-xl shadow-xl">
            <Text className="font-bold">Edit</Text>
            <Feather name="edit-2" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="w-full bg-white flex space-y-3 p-4">
          <View className="w-full flex flex-row justify-between items-center">
            <Text className="text-xl font-bold">My information</Text>
            <Feather name="info" size={24} color="black" />
          </View>
          <View className="flex flex-row items-center space-x-3">
            <Text className="text-lg font-bold">Full Name :</Text>
            <Text className="text-base font-semibold">{user?.fullName}</Text>
          </View>
          <View className="flex flex-row items-center space-x-3">
            <Text className="text-lg font-bold">Phone Number :</Text>
            <Text className="text-base font-semibold">+1 235679876</Text>
          </View>
          <View className="flex flex-row items-center space-x-3">
            <Text className="text-lg font-bold">Email Address :</Text>
            <Text className="text-base font-semibold">{user?.email}</Text>
          </View>
        </View>
        <View className="w-full flex space-y-4 p-4">
          <Text className="text-base font-bold text-slate-500">My Account</Text>
          <TouchableOpacity className="">
            <Text className="font-bold text-blue-600 text-lg">
              Switch to other account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
              AsyncStorage.removeItem("token");
              navigation.navigate("LoginScreen");
            }}
          >
            <Text className="font-bold text-red-600 text-lg">Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default ProfileScreen;
