import { Button, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Herbs")}
      >
        <Text style={styles.title}>Look at Herbs</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    width: "70%",
    height: "20%",
    backgroundColor: "#7777ff77",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "black",
  },
})
