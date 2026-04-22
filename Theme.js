import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Text } from "react-native"

export default function ThemeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 36 }}>Themes</Text>
    </SafeAreaView>
  )
}
