import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import Meal from "../../models/meal";
import MealDetails from "../../components/common/MealDetails";
import { MEALS } from "../../dummy/dummy-data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import IconButton from "../../components/common/IconButton";

type RootStackParamList = {
  MealDetail: { meal: Meal };
};

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, "MealDetail">;

// Navigation Prop의 타입 정의
type CategoriesScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type MealDetailProps = {
  route: MealDetailScreenRouteProp;
  navigation: CategoriesScreenNavigationProp;
};

export default function MealDetail({ route, navigation }: MealDetailProps) {
  const { id, title, ingredients, steps, imageUrl } = route.params.meal;

  const selectedMeal = MEALS.find((meal) => meal.id === id);

  const headerButtonPressHandler = () => {
    console.log("Tap!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"star"}
            color="white"
            onPress={() => console.log("tapped")}
          />
        );
      },
    });
  }, [headerButtonPressHandler, navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails meal={route.params.meal} />
      {selectedMeal?.ingredients.map((ingredient: string) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text style={styles.text}>{ingredients}</Text>
      <Text style={styles.text}>{steps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 12,
  },

  text: {
    color: "white",
  },

  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
});
