import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useReState } from "@raulpesilva/re-state"

export default function HerbsScreen() {
  const [bgc, setBgc] = useReState("bgc")

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={styles.header}>Herbs</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 36,
    color: "blue",
  },
})
