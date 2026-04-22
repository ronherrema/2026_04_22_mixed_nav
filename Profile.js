import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native"

const Stack = createNativeStackNavigator()

export default function ProfileScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 36 }}>Profile</Text>
    </SafeAreaView>
  )
}
