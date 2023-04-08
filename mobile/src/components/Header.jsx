import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View className="w-[90%] h-[70px] bg-[#F8F8F8] flex flex-row justify-between items-center px-4 rounded-xl shadow-2xl shadow-black ">
      <View className="flex flex-row space-x-2">
        <Text className=" text-lg font-bold ">Hello</Text>
        <Text className=" text-lg font-bold text-red-600">Alex</Text>
      </View>
      <View>
        <Ionicons name="menu-outline" size={30} color="black" />
      </View>
    </View>
  );
};

export default Header;
