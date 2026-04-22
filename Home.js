import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text } from "react-native"

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 36 }}>Home</Text>
    </SafeAreaView>
  )
}
