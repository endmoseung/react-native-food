import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../../dummy/dummy-data";
import CategoryGridTile from "../../components/screens/CategoriesScreen/CategoryGridTile";
import Category from "../../models/category";

const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
  return <CategoryGridTile category={itemData.item} />;
};

export default function CategoriesScreen() {
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
