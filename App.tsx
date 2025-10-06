import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faSearch,
  faPaperclip,
  faFileAlt,
  faMicrophone,
  faImage,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./global.css";

export default function App() {
  const files = [
    {
      id: 1,
      name: "Note.md",
      date: "10/02/2025 10:20AM",
      type: "Note",
      typeColor: "green",
      number: "241",
    },
    {
      id: 2,
      name: "file.pdf",
      date: "10/02/2025 10:22AM",
      type: "Doc",
      typeColor: "orange",
      number: "242",
    },
    {
      id: 3,
      name: "image.png",
      date: "10/02/2025 10:28AM",
      type: "Image",
      typeColor: "red",
      number: "243",
    },
  ];

  const getTypeColor = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "orange":
        return "bg-orange-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar style="light" />

      {/* Header Section */}
      <View className="px-6 pt-4 pb-4">
        {/* Email and Settings */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-base">dsanchez113@ucmerced.edu</Text>
          <TouchableOpacity>
            <Text className="text-white text-xl">⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar and Bundle Button */}
        <View className="flex-row items-center space-x-3">
          <View className="flex-1 bg-white rounded-lg px-4 py-3 flex-row items-center">
            <Text className="text-gray-400 text-lg mr-2">🔍</Text>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              className="flex-1 text-gray-900"
            />
          </View>
          <TouchableOpacity className="bg-button-outline px-4 py-3 rounded-lg flex-row items-center">
            <Text className="text-white text-lg mr-2">📎</Text>
            <Text className="text-white font-semibold">Bundle Files</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* File List */}
      <ScrollView className="flex-1 px-6">
        {files.map((file) => (
          <View
            key={file.id}
            className="bg-card-bg rounded-lg p-4 mb-3 flex-row items-center"
          >
            {/* Checkbox */}
            <View className="w-5 h-5 border-2 border-white rounded mr-4" />

            {/* File Icon */}
            <View className="w-10 h-10 bg-button-outline rounded-full items-center justify-center mr-4">
              <Text className="text-white font-bold text-lg">D</Text>
            </View>

            {/* File Info */}
            <View className="flex-1">
              <Text className="text-white text-base font-medium mb-1">
                {file.name}
              </Text>
              <Text className="text-gray-400 text-sm">{file.date}</Text>
            </View>

            {/* File Type and Number */}
            <View className="flex-row items-center">
              <View
                className={`w-2 h-2 rounded-full ${getTypeColor(
                  file.typeColor
                )} mr-2`}
              />
              <Text className="text-white text-sm mr-2">{file.type}</Text>
              <Text className="text-gray-400 text-sm">{file.number}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="bg-card-bg px-6 py-4 flex-row justify-around">
        <TouchableOpacity className="w-12 h-12 border-2 border-button-outline rounded-full items-center justify-center">
          <Text className="text-white text-xl">📄</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 border-2 border-button-outline rounded-full items-center justify-center">
          <Text className="text-white text-xl">📎</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 border-2 border-button-outline rounded-full items-center justify-center">
          <Text className="text-white text-xl">🎤</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 border-2 border-button-outline rounded-full items-center justify-center">
          <Text className="text-white text-xl">🖼️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
