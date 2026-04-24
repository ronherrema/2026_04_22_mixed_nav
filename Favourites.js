import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text } from "react-native"
import { useStore } from "./Store"

export default function FavouritesScreen() {
  const { bgc } = useStore()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36 }}>Faves</Text>
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
