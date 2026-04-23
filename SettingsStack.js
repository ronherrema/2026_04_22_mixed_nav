import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ThemesScreen from "./Themes"
import ProfileScreen from "./Profile"
import SettingsScreen from "./Settings"
import { useReState } from "@raulpesilva/re-state"

const Stack = createNativeStackNavigator()

export default function SettingsStackScreen() {
  const [bgc, setBgc] = useReState("bgc")
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: bgc,
        },
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Themes" component={ThemesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
