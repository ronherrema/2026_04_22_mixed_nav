import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text } from "react-native"

export default function ThemesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 36 }}>Themes</Text>
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
