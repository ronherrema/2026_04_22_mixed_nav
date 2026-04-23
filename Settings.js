import { SafeAreaView } from "react-native-safe-area-context"
import { Button, StyleSheet } from "react-native"
import { useStore } from "./Store"

export default function SettingsScreen({ navigation }) {
  const { bgc } = useStore()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Button
        title="Themes"
        onPress={() => navigation.navigate("Themes")}
      ></Button>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
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
