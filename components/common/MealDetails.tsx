import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Meal from "../../models/meal";

interface MealDetailsProps {
  meal: Meal;
}

export default function MealDetails({ meal }: MealDetailsProps) {
  return (
    <View style={[styles.contentsWrapper]}>
      <Text>{`duration : ${meal.duration}`}</Text>
      <Text>{`complexity : ${meal.complexity.toUpperCase()}`}</Text>
      <Text>{`affordability : ${meal.affordability.toUpperCase()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentsWrapper: {
    padding: 16,
  },
});
