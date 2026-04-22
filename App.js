import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./Home"
import HerbsScreen from "./Herbs"
import SettingsStackScreen from "./SettingsStack"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName
              if (route.name === "Home") {
                iconName = "home-outline"
              } else if (route.name === "Herbs") {
                iconName = "leaf-outline"
              } else if (route.name === "Settings")
                iconName = "settings-outline"
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#343434",
            tabBarInactiveTintColor: "#ababab",
            tabBarStyle: {
              backgroundColor: "#efefef",
            },
            headerShown: false,
            // tabBarShowLabel: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Herbs" component={HerbsScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
