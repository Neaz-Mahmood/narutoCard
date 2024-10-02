import NarutoCard from "@/components/NarutoCard";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const narutoData = {
    name: "Naruto Uzumaki",
    age: 32,
    village: "Konoha",
    rank: "Hokage",
    image:
      "https://i.pinimg.com/564x/22/3f/a8/223fa84e2e58598d27a6d733b5ff99e7.jpg",
    jutsus: ["Shadow Clone Jutsu", "Rasengan", "Sage Mode"],
    hp: 100,
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NarutoCard {...narutoData} />
        <NarutoCard {...narutoData} />
        <NarutoCard {...narutoData} />
        <NarutoCard {...narutoData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0,
    backgroundColor: "#f5f5f5",
  },
});
