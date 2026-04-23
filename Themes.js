import { SafeAreaView } from "react-native-safe-area-context"
import { Button, StyleSheet, Text } from "react-native"
import { useStore } from "./Store"

export default function ThemesScreen() {
  const { bgc, setBgc } = useStore()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36 }}>Themes</Text>
      <Button title="Green" onPress={() => setBgc("#77ff77ff")}></Button>
      <Button title="White" onPress={() => setBgc("#fff")}></Button>
      <Button title="Purple" onPress={() => setBgc("#7777ff77")}></Button>
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
