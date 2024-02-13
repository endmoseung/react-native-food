import { createContext, useState } from "react";

interface FavoriteContextType {
  ids: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const FavoriteContext = createContext<FavoriteContextType>({
  ids: [],
  addFavorite: (id: number) => {},
  removeFavorite: (id: number) => {},
});

const FavoriteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<number[]>([]);

  const addFavorite = (id: number) => {
    console.log(id, "아이디");
    setFavoriteMealIds((currentFavoriteIds) => [...currentFavoriteIds, id]);
  };

  const removeFavorite = (id: number) => {
    setFavoriteMealIds((currentFavoriteIds) =>
      currentFavoriteIds.filter((mealId: number) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContextProvider, FavoriteContext };
