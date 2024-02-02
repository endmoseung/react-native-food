import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../../dummy/dummy-data";
import Meal from "../../models/meal";
import MealItem from "../../components/screens/MealsOverviewScreen/MealItem";

export default function MealsOverviewScreen({ navigation }) {
  const route = useRoute();

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(route.params?.categoryId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === route.params?.categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, route]);

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    return <MealItem meal={itemData.item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
      <Text>Meals overview screen</Text>
      <Text>{route.params?.categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
