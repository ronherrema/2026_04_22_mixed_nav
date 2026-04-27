import { Text, StyleSheet, View } from "react-native"
import { useStore } from "./Store"

export default function ProfileScreen() {
  const { bgc } = useStore()

  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36, color: "#fff" }}>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
})
