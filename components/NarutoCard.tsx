import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";


type TCharacterDetails = {
  name: string;
  images: string[];
  jutsu: string[];
  id: number;
};

const NarutoCard = ({
  id,
  name,
  images,
  jutsu,
}: TCharacterDetails) => {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>

      <Image
        source={{ uri: images[0] }}
        style={styles.image}
        accessibilityLabel={name}
        resizeMode="contain"
      />
      <View style={styles.jutsuContainer}>
        <Text style={styles.jutsu}>Jutsu: {jutsu?.join(", ")}</Text>
      </View>
    </View>
  );
};

export default NarutoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
    name: {
        fontSize: 24,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 24,
        fontWeight: "bold",
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 16,
    },
    rank: {
        fontSize: 16,
    },
    jutsuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    jutsu: {
        fontSize: 22,
        fontWeight: 'bold',
    },  
});
