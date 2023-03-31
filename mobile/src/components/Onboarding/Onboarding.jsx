import React from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <>
      <Onboarding
        onSkip={() => navigation.replace("LoginScreen")}
        onDone={() => navigation.navigate("LoginScreen")}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../../assets/onboarding/eat.png")}
                className="w-72 h-72"
              />
            ),
            title: "Find Nearby Drivers",
            subtitle:
              "Get connected with drivers in your area who can deliver your items quickly and easily.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../../assets/onboarding/eat.png")}
                className="w-72 h-72"
              />
            ),
            title: "Quick and Easy Delivery",
            subtitle:
              "Our app connects you with nearby drivers who can deliver your items within minutes.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../../assets/onboarding/eat.png")}
                className="w-72 h-72"
              />
            ),
            title: "Fast Delivery Anywhere",
            subtitle:
              "No matter where you are, we'll connect you with drivers who can deliver your items quickly and efficiently.",
          },
        ]}
      />
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  );
};

export default OnboardingScreen;
