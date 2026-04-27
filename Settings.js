import { Button, StyleSheet, View } from "react-native"
import { useStore } from "./Store"

export default function SettingsScreen({ navigation }) {
  const { bgc } = useStore()

  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Button
        title="Themes"
        onPress={() => navigation.navigate("Themes")}
      ></Button>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
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
