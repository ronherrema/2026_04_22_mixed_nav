import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text } from "react-native"
import { useReState } from "@raulpesilva/re-state"

export default function HomeScreen() {
  const [bgc, setBgc] = useReState("bgc", "red")

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36 }}>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
  },
})
