import { SafeAreaView } from "react-native-safe-area-context"
import { Text, StyleSheet } from "react-native"
import { useReState } from "@raulpesilva/re-state"

export default function ProfileScreen() {
  const [bgc, setBgc] = useReState("bgc")

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 36 }}>Profile</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
})
