import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View } from "react-native"
import { useReState } from "@raulpesilva/re-state"
import { useState } from "react"

export default function ThemesScreen() {
  const [bgc, setBgc] = useReState("bgc", "red")
  // const [bgc, setBgc] = useState("red")

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36 }}>Themes</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
