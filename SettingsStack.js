import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ThemeScreen from "./Theme"
import ProfileScreen from "./Profile"
import SettingsScreen from "./Settings"

const Stack = createNativeStackNavigator()

export default function SettingsStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Theme" component={ThemeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
