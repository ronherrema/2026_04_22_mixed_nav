import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Text } from "react-native"

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button
        title="Theme"
        onPress={() => navigation.navigate("Theme")}
      ></Button>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
    </SafeAreaView>
  )
}
