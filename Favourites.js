import { StyleSheet, View, Text, Image, ScrollView } from "react-native"
import { useStore } from "./Store"
import { SafeAreaView } from "react-native-safe-area-context"

export default function FavouritesScreen() {
  const { bgc, selectedItems } = useStore()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 36, color: "white", marginBottom: 10 }}>
        Favourites
      </Text>
      <ScrollView
        contentContainerStyle={styles.scroll}
        style={{ width: "80%" }}
      >
        {selectedItems.map((item, index) => (
          <View key={index}>
            <Text style={styles.name}>{item.name}</Text>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    color: "#555",
  },
  scroll: {
    alignItems: "flex-start",
    flexGrow: 0,
    // height: "90%",
  },
})
