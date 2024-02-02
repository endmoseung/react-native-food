import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Meal from "../../../models/meal";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../../common/MealDetails";

interface MealItemProps {
  meal: Meal;
}

export default function MealItem({ meal }: MealItemProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
        android_ripple={{ color: "#ccc" }}
        onPress={() => (navigation.navigate as any)("MealDetail", { meal })}
      >
        <View style={styles.innerContainer}>
          <View style={styles.contents}>
            <Image style={styles.image} source={{ uri: meal.imageUrl }} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  contents: {
    gap: 16,
  },

  contentsWrapper: {
    padding: 16,
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
