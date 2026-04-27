import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native"
import herbs from "./HerbsList"
import { useStore } from "./Store"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function HerbsScreen({ navigation }) {
  const { bgc } = useStore()

  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={styles.header}>Herbs</Text>
      <FlatList
        style={{ width: "80%", marginTop: 10 }}
        data={herbs}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ justifyContent: "space-evenly" }}>
              <Text style={styles.name}>{item.name}</Text>
              <Image source={item.image} style={styles.image} />
            </View>

            <TouchableOpacity
              style={styles.more}
              onPress={() => navigation.navigate("Details")}
            >
              <Text style={styles.learnText}>Learn more</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                style={styles.icon}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        )}
      />
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: "#555",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  more: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    color: "white",
  },
  learnText: {
    fontSize: 16,
    color: "#555",
  },
  icon: {
    color: "#555",
  },
})
