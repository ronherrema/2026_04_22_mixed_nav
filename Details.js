import { StyleSheet, Text, View } from "react-native"
import { useStore } from "./Store"

export default function DetailsScreen({ route }) {
  const { bgc } = useStore()
  const { item } = route.params

  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Text>Name: {item.name}</Text>
      <Text>Scientific Name: {item.scientificName}</Text>
      <Text>Benefits: {item.benefits}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 15,
  },
})
