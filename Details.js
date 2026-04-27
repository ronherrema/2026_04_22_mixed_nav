import { Button, StyleSheet, Text, View } from "react-native"
import { useStore } from "./Store"

export default function DetailsScreen({ route }) {
  const { bgc, selectedItems, addSelectedItem } = useStore()
  const { item } = route.params

  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>Scientific Name: {item.scientificName}</Text>
      <Text style={styles.text}>Benefits: {item.benefits}</Text>
      <Button title="Fave" onPress={() => addSelectedItem(item)}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 15,
  },
  text: {
    fontSize: 18,
    padding: 3,
  },
})
