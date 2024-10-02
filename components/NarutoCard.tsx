import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NarutoCard = () => {
  return (
    <View style={styles.card}>
      <Text>NarutoCard</Text>
    </View>
  )
}

export default NarutoCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 16,
        padding: 16,
        borderRadius: 16,
        borderWidth: 2,  
        ...Platform.select({
            ios: {
                shadowColor: '#333',
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
})