import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Logo from "../components/Logo";
import axios from "axios";
import Constants from "expo-constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formDate, setFormData] = useState({
    email: "",
    password: "",
  });
  const apiUrl = Constants.manifest.extra.apiUrl;

  const { email, password } = formDate;
  
  const onChange = (text, name) => {
    setFormData({ ...formDate, [name]: text });
  };

  const loginFunction = async () => {
    try {
      const res = await axios.post(`${apiUrl}/user/login`, formDate);
      const token = res.data.token;
      // clear async storage
      await AsyncStorage.clear();
      // Store the token in local storage
      await AsyncStorage.setItem('token', token);
      // Navigate to the home screen
      navigation.navigate('Nav');
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      } else {
        console.log(error.message);
      }
    }
  };

  const hidePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <View className="bg-white flex w-full h-full items-center pt-9">
        <Logo subtitle=" Please enter your information to login with SwiftDelivery " />
        {/* all inputs field */}
        <View className="flex w-full h-[200px] justify-around items-center mb-5 ">
          {/* Email input */}
          <View className="flex flex-row items-center space-x-2 bg-slate-100 w-[90%] h-[60px] rounded-full px-3 py-2 ">
            <View className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black">
              <MaterialIcons name="alternate-email" size={24} color="black" />
            </View>
            <View className="flex  w-[80%] text-white ">
              <TextInput
                className="flex h-full items-center text-base font-semibold text-black"
                placeholder="Email"
                onChangeText={(text) => onChange(text, "email")}
              />
            </View>
          </View>
          {/* Password input */}
          <View className="flex flex-row items-center space-x-2 bg-slate-100 w-[90%] h-[60px] rounded-full px-3 py-2 ">
            <View className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black">
              <Ionicons name="lock-closed-outline" size={24} color="black" />
            </View>
            <View className="flex  w-[70%] text-white ">
              <TextInput
                className="flex h-full items-center text-base font-semibold text-black"
                placeholder="Password"
                secureTextEntry={!showPassword}
                onChangeText={(text) => onChange(text, "password")}
              />
            </View>
            <TouchableOpacity onPress={hidePassword}>
              <MaterialIcons
                name={showPassword ? "visibility-off" : "visibility"}
                size={24}
                color="#666666"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* register button */}
        <View className="flex bg-black items-center justify-center w-[60%] h-[60px] rounded-full  mt-5">
          <TouchableOpacity onPress={loginFunction}>
            <Text className="text-white font-semibold text-lg">Sign in</Text>
          </TouchableOpacity>
        </View>
        {/* login button */}
        <View className="flex flex-row items-center space-x-1 my-5">
          <Text className="text-base font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
            <Text className="text-blue-500 text-base font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
        {/* make line  */}
        <View className="flex flex-row w-[80%] items-center space-x-2 my-5">
          <View className="flex-1 h-[1px] bg-gray-300"></View>
          <Text className="text-base font-semibold text-slate-500">
            Sign in with
          </Text>
          <View className="flex-1 h-[1px] bg-gray-300"></View>
        </View>
        {/* social media buttons */}
        <View className="flex flex-row items-center justify-center space-x-5 ">
          <TouchableOpacity className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-slate-100">
            <Ionicons name="logo-google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-slate-100">
            <MaterialIcons name="facebook" size={30} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-slate-100">
            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
};

export default LoginScreen;
