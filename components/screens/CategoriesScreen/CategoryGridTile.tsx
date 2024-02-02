import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Category from "../../../models/category";

interface CategoryTileProps {
  category: Omit<typeof Category.prototype, "id">;
  onPress?: () => void;
}

export default function CategoryGridTile({
  category,
  onPress,
}: CategoryTileProps) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <View
          style={[styles.innerContainer, { backgroundColor: category.color }]}
        >
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
