import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import { Feather } from "@expo/vector-icons";

const Drivers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Handle search functionality here
  };
  return (
    <View className="w-[100%] h-[100%] flex justify-center items-center">
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
