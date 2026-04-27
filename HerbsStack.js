import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HerbsScreen from "./Herbs"
import DetailsScreen from "./Details"
import { useStore } from "./Store"

const Stack = createNativeStackNavigator()

export default function HerbsStackScreen() {
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
      <Stack.Screen name="Herbs" component={HerbsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}
