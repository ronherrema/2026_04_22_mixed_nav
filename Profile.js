import { Text, StyleSheet, View, TextInput } from "react-native"
import { useStore } from "./Store"
import { useState } from "react"

export default function ProfileScreen() {
  const { bgc, profile, setProfile } = useStore()
  const [input, setInput] = useState("")

  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36, color: "#fff" }}>Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={input}
        onChangeText={(t) => setInput(t)}
        onSubmitEditing={() => {
          setProfile({ name: input })
          // setInput("")
        }}
        clearTextOnFocus={true} // iOS
        clearButtonMode="always" // iOS
      ></TextInput>
      <Text style={styles.name}>Name: {profile.name}</Text>
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
  input: {
    width: 300,
    height: 40,
    padding: 5,
    borderWidth: 1,
    alignSelf: "flex-start",
    margin: 20,
  },
  name: {
    alignSelf: "flex-start",
    margin: 20,
    fontSize: 20,
  },
})
