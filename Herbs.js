import { FlatList, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import herbs from "./HerbsList"
import { useStore } from "./Store"

export default function HerbsScreen() {
  const { bgc } = useStore()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36 }}>Herbs</Text>
      <FlatList
        style={{ width: "80%" }}
        data={herbs}
        renderItem={({ item }) => (
          <>
            <Text>Name: {item.name}</Text>
            <Text>Scientific name: {item.scientificName}</Text>
            <Text>Benefits: {item.benefits}</Text>
          </>
        )}
      ></FlatList>
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
