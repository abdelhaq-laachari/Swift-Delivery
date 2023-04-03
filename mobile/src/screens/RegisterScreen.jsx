import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const hidePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <View className="bg-white flex w-full h-full items-center pt-7">
        <Header subtitle="Please enter your information to create an account with SwiftDelivery" />
        {/* all inputs field */}
        <View className="flex w-full h-[250px] justify-around items-center mb-5 ">
          {/* full name input */}
          <View className="flex flex-row items-center space-x-2 bg-slate-100 w-[90%] h-[60px] rounded-full px-3 py-2 ">
            <View className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black">
              <Ionicons name="person-outline" size={24} color="black" />
            </View>
            <View className="flex w-[80%] text-white ">
              <TextInput
                className="flex h-full items-center text-base font-semibold text-black"
                placeholder="Full Name"
              />
            </View>
          </View>
          {/* Email input */}
          <View className="flex flex-row items-center space-x-2 bg-slate-100 w-[90%] h-[60px] rounded-full px-3 py-2 ">
            <View className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black">
              <MaterialIcons name="alternate-email" size={24} color="black" />
            </View>
            <View className="flex  w-[80%] text-white ">
              <TextInput
                className="flex h-full items-center text-base font-semibold text-black"
                placeholder="Email"
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
          <TouchableOpacity>
            <Text className="text-white font-semibold text-lg">Sign Up</Text>
          </TouchableOpacity>
        </View>
        {/* login button */}
        <View className="flex flex-row items-center space-x-1 my-5">
          <Text className="text-base font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text className="text-blue-500 text-base font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
        {/* make line  */}
        <View className="flex flex-row w-[80%] items-center space-x-2 my-5">
          <View className="flex-1 h-[1px] bg-gray-300"></View>
          <Text className="text-base font-semibold text-slate-500">
            Sign up with
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

export default RegisterScreen;
