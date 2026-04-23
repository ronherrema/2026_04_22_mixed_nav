import { SafeAreaView } from "react-native-safe-area-context"
import { Button, StyleSheet } from "react-native"

export default function SettingsScreen({ navigation }) {
  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
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
