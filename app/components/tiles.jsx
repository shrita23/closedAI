import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Image, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Tiles = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleBoxPress = async () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      let permission = await ImagePicker.requestCameraPermissionsAsync();
      if (permission.granted) {
        const result = await ImagePicker.launchCameraAsync();
        console.log(result);
      } else {
        alert("Camera permission is required.");
      }
    }
  };

  return (
    <View className="relative w-[88%] self-center mb-4">
      {/* Top Gradient Border */}
      <LinearGradient
        colors={["#FFD700", "#E4A372", "#FF00FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
      />

      {/* Task Container */}
      <View className="bg-black p-4 rounded-xl flex-row items-center gap-3 border border-neutral-700 shadow-lg shadow-yellow-500/10">
        <TouchableOpacity onPress={handleBoxPress} activeOpacity={0.8}>
          <Image
            source={
              isChecked
                ? require("../../assets/images/checked-checkbox.png")
                : require("../../assets/images/unchecked-checkbox.png")
            }
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <Text className="text-white text-base font-medium">Task Name</Text>
      </View>

      {/* Soft Gradient Glow */}
      <LinearGradient
        colors={["#FFD700", "#E4A372", "#FF00FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute -bottom-1 left-0 w-full h-[4px] opacity-60 rounded-b-xl"
      />
    </View>
  );
};

export default Tiles;
