import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, Button } from "react-native"
import { useReState } from "@raulpesilva/re-state"

export default function ThemesScreen() {
  const [bgc, setBgc] = useReState("bgc")

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={styles.header}>Themes</Text>
      <Button title="Red" onPress={() => setBgc("#ff777777")}></Button>
      <Button title="Green" onPress={() => setBgc("#77ff7777")}></Button>
      <Button title="White" onPress={() => setBgc("#fff")}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    fontSize: 36,
    color: "blue",
  },
})
