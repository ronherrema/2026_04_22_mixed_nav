import { Button, StyleSheet, Text, View } from "react-native"
import { useStore } from "./Store"

export default function ThemesScreen() {
  const { bgc, setBgc } = useStore()

  return (
    <View
      style={[styles.container, { backgroundColor: bgc }]}
      edges={["left", "right", "bottom"]}
    >
      <Text style={{ fontSize: 36, color: "#fFF" }}>Themes</Text>
      <Button title="Green" onPress={() => setBgc("#77ff77ff")}></Button>
      <Button title="Purple" onPress={() => setBgc("#7777ff77")}></Button>
      <Button title="Salmon" onPress={() => setBgc("#ff777777")}></Button>
      <Button title="White" onPress={() => setBgc("#fff")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
})
