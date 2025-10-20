import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import "./global.css";

export default function App() {
  const [selectedFiles, setSelectedFiles] = useState<Set<number>>(new Set());

  const toggleFileSelection = (fileId: number) => {
    setSelectedFiles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(fileId)) {
        newSet.delete(fileId);
      } else {
        newSet.add(fileId);
      }
      return newSet;
    });
  };

  const files = [
    {
      id: 1,
      name: "note.md",
      date: "10/02/2025 10:20AM",
      type: "Note",
      typeColor: "green",
      number: "241",
    },
    {
      id: 2,
      name: "resume.pdf",
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
    {
      id: 4,
      name: "video.mp4",
      date: "10/02/2025 10:30AM",
      type: "Recording",
      typeColor: "blue",
      number: "244",
    },
    {
      id: 5,
      name: "audio.mp3",
      date: "10/02/2025 10:32AM",
      type: "Recording",
      typeColor: "blue",
      number: "245",
    },
    {
      id: 6,
      name: "file.docx",
      date: "10/02/2025 10:34AM",
      type: "Doc",
      typeColor: "orange",
      number: "246",
    },
    {
      id: 7,
      name: "presentation.pptx",
      date: "10/02/2025 10:36AM",
      type: "Doc",
      typeColor: "orange",
      number: "247",
    },
    {
      id: 8,
      name: "spreadsheet.xlsx",
      date: "10/02/2025 10:38AM",
      type: "Doc",
      typeColor: "orange",
      number: "248",
    },
  ];

  const getTypeColor = (color: string) => {
    switch (color) {
      case "button-border-color":
        return "#D7827E";
      case "green":
        return "bg-green-500";
      case "orange":
        return "bg-orange-500";
      case "red":
        return "bg-red-500";
      case "blue":
        return "bg-blue-500";
      default:
        return "bg-black";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar style="light" />

      {/* Header Section */}
      <View className="px-6 pt-4 pb-4 mt-10">
        {/* Email and Settings */}
        <View className="flex-row justify-between items-center mt-12 mb-2">
          <Text className="text-white text-base">dsanchez113@ucmerced.edu</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faGear} size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search Bar and Bundle Button */}
        <View className="flex-row items-center space-x-3">
          <View className="flex-1 bg-white rounded-lg px-4 py-3 flex-row items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="black" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              className="ml-2 flex-1 text-gray-900"
            />
          </View>
          <TouchableOpacity className="border-2 border-button-outline bg-black px-4 py-3 rounded-lg flex-row items-center">
            <FontAwesomeIcon
              icon={faLink}
              size={20}
              color={getTypeColor("button-border-color")}
            />
            <Text className="ml-2  font-semibold text-button-outline text-lg">
              Link
            </Text>
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
            <TouchableOpacity
              className={`w-5 h-5 rounded mr-4 items-center justify-center ${
                selectedFiles.has(file.id)
                  ? "bg-button-outline"
                  : "border-2 border-white"
              }`}
              onPress={() => toggleFileSelection(file.id)}
            >
              {selectedFiles.has(file.id) && (
                <FontAwesomeIcon icon={faCheck} size={15} color="black" />
              )}
            </TouchableOpacity>

            {/* File Icon */}
            <View className="w-10 h-10 bg-button-outline rounded-full items-center justify-center mr-4">
              <Text className="text-black font-bold text-lg">D</Text>
            </View>

            {/* File Info */}
            <View className="flex-1">
              <Text className="text-white text-base font-medium mb-1">
                {file.name}
              </Text>
              <Text className="text-gray-400 text-sm">{file.date}</Text>
            </View>

            {/* File Type and Number */}
            <View className="items-end">
              <View className="flex-row items-center mb-1">
                <View
                  className={`w-2 h-2 rounded-full ${getTypeColor(
                    file.typeColor
                  )} mr-2`}
                />
                <Text className="text-white text-sm">{file.type}</Text>
              </View>
              <Text className="text-gray-400 text-sm">{file.number}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className=" px-6 py-4 flex-row justify-around mb-4">
        <TouchableOpacity className="w-14 h-14 border-2 bg-button-outline border-button-outline rounded-full items-center justify-center">
          <FontAwesomeIcon icon={faFileLines} size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="w-14 h-14 border-2 bg-button-outline border-button-outline rounded-full items-center justify-center">
          <FontAwesomeIcon icon={faPaperclip} size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="w-14 h-14 border-2 bg-button-outline border-button-outline rounded-full items-center justify-center">
          <FontAwesomeIcon icon={faMicrophone} size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="w-14 h-14 border-2 bg-button-outline border-button-outline rounded-full items-center justify-center">
          <FontAwesomeIcon icon={faCamera} size={20} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
