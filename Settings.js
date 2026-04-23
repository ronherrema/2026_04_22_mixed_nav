import { SafeAreaView } from "react-native-safe-area-context"
import { Button, StyleSheet } from "react-native"
import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react"

export default function SettingsScreen({ navigation }) {
  const [bgc, setBgc] = useState("white")

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem("bgc")
      if (data !== null) {
        setBgc(data)
      }
    } catch (e) {
      alert(e)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getData()
    }, []),
  )

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Button
        title="Themes"
        onPress={() => navigation.navigate("Themes")}
      ></Button>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
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
