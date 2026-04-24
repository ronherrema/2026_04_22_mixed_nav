import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./Home"
import HerbsScreen from "./Herbs"
import FavouritesScreen from "./Favourites"
import SettingsStackScreen from "./SettingsStack"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: "#343434",
            tabBarInactiveTintColor: "#bcbcbc",
            tabBarStyle: {
              backgroundColor: "#f7f7f7",
            },
            headerShown: false,
            // tabBarShowLabel: false,
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Herbs"
            component={HerbsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="leaf-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={FavouritesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="SettingsStack"
            component={SettingsStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
