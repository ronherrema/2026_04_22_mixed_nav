import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ThemesScreen from "./Themes"
import ProfileScreen from "./Profile"
import SettingsScreen from "./Settings"

const Stack = createNativeStackNavigator()

export default function SettingsStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Theme" component={ThemesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
