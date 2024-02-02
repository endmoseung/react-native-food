import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../../dummy/dummy-data";
import CategoryGridTile from "../../components/screens/CategoriesScreen/CategoryGridTile";
import Category from "../../models/category";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Stack Navigator의 타입 정의
type RootStackParamList = {
  MealsOverview: undefined;
};

// Navigation Prop의 타입 정의
type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealsOverview"
>;
interface CategoriesScreenProps {
  navigation: CategoriesScreenNavigationProp;
}

export default function CategoriesScreen({
  navigation,
}: CategoriesScreenProps) {
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return <CategoryGridTile category={itemData.item} onPress={pressHandler} />;
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
