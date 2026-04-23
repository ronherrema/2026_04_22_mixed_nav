import { SafeAreaView } from "react-native-safe-area-context"
import { Button, StyleSheet, Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react"

export default function ThemesScreen() {
  const [bgc, setBgc] = useState("white")

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("bgc", bgc)
    } catch (e) {
      alert(e)
    }
  }

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

  useEffect(() => {
    storeData()
  }, [bgc])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36 }}>Themes</Text>
      <Button title="Purple" onPress={() => setBgc("#7777ff77")}></Button>
      <Button title="Green" onPress={() => setBgc("#77ff7777")}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
