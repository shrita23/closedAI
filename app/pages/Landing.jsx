import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import '../../../global.css';
import "nativewind";

const Landing = () => {
  return (
    <View className="flex flex-col items-center bg-neutral-950 w-screen min-h-screen h-max pt-4 px-4 text-neutral-50">
      <Image source={require('../../assets/images/landing-image.png')} className="w-full h-1/2 object-cover rounded-lg" resizeMode="cover"/>
      <Text className="text-2xl font-bold text-white mt-5">
        <Text className="text-yellow-500">W</Text>orkhorse
      </Text>
    </View>
  );
};

export default Landing;
