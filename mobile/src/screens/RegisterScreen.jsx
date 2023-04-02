import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  return (
    <>
      <View style={styles.container}>
        {/* logo */}
        <View>
          <Text>SwiftDelivery</Text>
        </View>
        {/* subtitle */}
        <View>
          <Text>
            Please enter your information to create an account with
            SwiftDelivery
          </Text>
        </View>
        {/* full name input with icons */}
        <View className="flex flex-row items-center space-x-2 bg-slate-100 w-[90%] h-[60px] rounded-full px-3 py-2 ">
          <View className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black">
            <Ionicons name="person-outline" size={30} color="black" />
          </View>
          <View className="flex bg-reds-500 w-[80%] text-white ">
            <TextInput className="flex h-full items-center text-base font-semibold text-black" placeholder="Full Name" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegisterScreen;
