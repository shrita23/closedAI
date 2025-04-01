import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import "nativewind";

const Landing = () => {
  return (
    <View className="flex-1 items-center bg-black pt-12">
      <LinearGradient colors={['#ff8c00', '#800080']} className="w-11/12 h-72 rounded-2xl justify-center items-center overflow-hidden">
        <Image source={require('../../assets/images/landing-image.png')} className="w-full h-full object-cover" />
      </LinearGradient>
      <Text className="text-2xl font-bold text-white mt-5">
        <Text className="text-yellow-500">W</Text>orkhorse
      </Text>
      <Text className="text-xl font-bold text-white mt-3">Level up in Real Life</Text>
      <Text className="text-sm text-gray-400 text-center mt-2 mx-5">
        Set any goal of your choice, and we'll break it down into a flow of achievable quests.
        Are you ready to begin?
      </Text>
      <TouchableOpacity className="flex-row items-center bg-white px-5 py-2 rounded-full mt-5">
        <Image source={require('../../assets/images/google-icon.png')} className="w-5 h-5 mr-2" />
        <Text className="text-base font-bold">Get Started with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;
