import { View, Text, Image } from "react-native";
import React from "react";

const Header = ({ subtitle }) => {
  return (
    <View className="flex justify-center w-full h-[170px]">
      {/* logo */}
      <View className="flex flex-row items-center justify-center w-full">
        <Image
          className="w-[60px] h-[60px]"
          source={require("../../assets/images/logo.png")}
        />
        <View className="flex flex-row">
          <Text className="text-4xl font-bold">Swift</Text>
          <Text className="text-4xl font-bold text-red-600">Delivery</Text>
        </View>
      </View>
      {/* subtitle */}
      <View className="flex items-center justify-center w-full ">
        <Text className="text-center text-sm font-semibold text-slate-500">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default Header;
