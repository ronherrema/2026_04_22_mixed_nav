import { StyleSheet, View, Text } from "react-native"
import { useStore } from "./Store"

export default function FavouritesScreen() {
  const { bgc } = useStore()

  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36, color: "white" }}>Faves</Text>
    </View>
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
