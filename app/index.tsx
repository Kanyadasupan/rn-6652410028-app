import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator } from "react-native";
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Index() {
  // โหลดหน้าจอ
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Image
          source={require("@/assets/images/taxi.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>TAXI METER</Text>
        <Text style={styles.caption}>THAI FARE CALCULATOR</Text>
        <View style={styles.loader}>
          <LoadingSpinner size={50} color="#009788" />
        </View>
      </View>
      <Text style={styles.id}>ID : 6652410028</Text>
      <Text style={styles.name}>NAME : KANYADA SUPAN</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FED700",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 40,
    fontFamily: "Prompt_700Bold",
    marginTop: 20,
    color: "#322c6e",
  },
  caption: {
    fontSize: 14,
    fontFamily: "Prompt_700Bold",
    color: "#009788",
  },
  frame: {
    alignItems: "center",
    justifyContent: "center",
    padding: 70,
    borderRadius: 10,
    backgroundColor: "#fdef81",
  },
  loader: {
    marginTop: 50,
  },
  id: {
    fontSize: 20,
    fontFamily: "Prompt_600SemiBold",
    color: "#5c5c5c",
    marginTop: 50,
  },
  name: {
    fontSize: 20,
    fontFamily: "Prompt_600SemiBold",
    color: "#5c5c5c",
  },
});
