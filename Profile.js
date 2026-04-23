import { SafeAreaView } from "react-native-safe-area-context"
import { Text, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function ProfileScreen() {
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

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
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
