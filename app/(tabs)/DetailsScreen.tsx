import Details from "@/components/Details";
import NarutoCard from "@/components/NarutoCard";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
} from "react-native";

const baseUrl = 'https://narutodb.xyz/api';
  

export default function DetailScreen({ navigation, route }: any) {
  const { id } = route.params;
  const [data, setData] = useState({});

  const fetchCharacters = async () => {
    try {
    const abortController = new AbortController();
    const url = `${baseUrl}/character/${id}`;
    const response = await axios.get(url, {
      signal: abortController.signal,
    });
    console.log(response)
    return response?.data ?? [];
    } catch (error) {
    console.error(error);
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      console.log(data, "data")
      setData(data ?? {});
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Details data={data} navigation={navigation} />
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
 