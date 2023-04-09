import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Constants from "expo-constants";

const Drivers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [drivers, setDrivers] = useState([]);
  const apiUrl = Constants.manifest.extra.apiUrl;

  useEffect( () => {
    axios.get(`${apiUrl}/driver/getAll`)
    .then((res) => {
      setDrivers(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [apiUrl]);
  console.log(drivers)

  const handleSearch = () => {
    // Handle search functionality here
  };
  return (
    <View className="w-[100%] h-full flex mt-9 space-y-6 items-center">
      <Header />
      <View className="w-[90%]">
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Feather
              name="search"
              size={24}
              color="gray"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Mockups, Logos..."
              placeholderTextColor="gray"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        drivers.map((driver) => {
          return (
            <View className="w-[90%] h-[100px] bg-white flex flex-row justify-between items-center border rounded-xl shadow-xl p-3 my-3">
              <View className="flex flex-row items-center space-x-3">
                <Image
                  className="w-[60px] h-[60px] rounded-full"
                  source={require("../../assets/images/user.jpg")}
                />
                <View className="flex space-y-1">
                  <Text className="font-bold">{driver.firstName} {driver.lastName}</Text>
                  <Text className="font-bold">{driver.phone}</Text>
                  <Text className="font-bold">{driver.address}</Text>
                </View>
              </View>
              <View>
                <Ionicons name="call-outline" size={24} color="green" />
              </View>
            </View>
          )
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  searchButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default Drivers;
