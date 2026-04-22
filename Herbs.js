import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HerbsScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 36 }}>Herbs</Text>
    </SafeAreaView>
  )
}
