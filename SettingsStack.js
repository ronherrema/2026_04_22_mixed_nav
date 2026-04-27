import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ThemesScreen from "./Themes"
import ProfileScreen from "./Profile"
import SettingsScreen from "./Settings"
import { useStore } from "./Store"

const Stack = createNativeStackNavigator()

export default function SettingsStackScreen() {
  const { bgc } = useStore()

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: bgc,
        },
        // headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Themes" component={ThemesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
