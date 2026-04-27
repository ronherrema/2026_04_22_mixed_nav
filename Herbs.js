import { Image, FlatList, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import herbs from "./HerbsList"
import { useStore } from "./Store"

export default function HerbsScreen() {
  const { bgc } = useStore()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36, color: "white" }}>Herbs</Text>
      <FlatList
        style={{ width: "80%" }}
        data={herbs}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>Name: {item.name}</Text>
            <Text>Scientific name: {item.scientificName}</Text>
            <Text>Benefits: {item.benefits}</Text>
            <Image source={item.image} style={{ width: 100, height: 100 }} />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
})
