import { Text, View } from "react-native";
import Landing from "./pages/landing.jsx";
import "../global.css"

export default function Index() {
  return (
    <View className="flex flex-col justify-start bg-neutral-950 w-screen min-h-screen h-max text-neutral-50">
      <Landing />
    </View>
  );
}
