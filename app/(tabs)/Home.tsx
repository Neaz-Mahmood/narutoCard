import NarutoCard from "@/components/NarutoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  FlatList,
  View,
  SafeAreaView,
} from "react-native";

const baseUrl = 'https://narutodb.xyz/api';
  

export default function HomeScreen() {
  const [data, setData] = useState([]);

  const fetchCharacters = async () => {
    try {
    const abortController = new AbortController();
    const url = `${baseUrl}/character`;
    const response = await axios.get(url, {
      signal: abortController.signal,
    });
    return response?.data ?? [];
    } catch (error) {
    console.error(error);
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setData(data?.characters ?? []);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
        data={data}
        renderItem={({ item }: any) => (<NarutoCard {...item}/>)}
        keyExtractor={(item: any) => item?.id}
      />
      </View>
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
 