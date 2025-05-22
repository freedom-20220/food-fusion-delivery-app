
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Favorite } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface FavoritesContextType {
  favorites: Favorite[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { toast } = useToast();

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error('Failed to parse favorites:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: Product) => {
    const newFavorite: Favorite = {
      id: `fav-${Date.now()}`,
      userId: 'user-1', // In a real app, this would be the actual user ID
      product,
      createdAt: new Date(),
    };
    
    setFavorites(prev => [...prev, newFavorite]);
    toast({
      title: "Added to favorites",
      description: `${product.name} has been added to your favorites.`,
      duration: 2000,
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites(prev => {
      const updatedFavorites = prev.filter(fav => fav.product.id !== productId);
      
      const removedProduct = prev.find(fav => fav.product.id === productId)?.product;
      if (removedProduct) {
        toast({
          title: "Removed from favorites",
          description: `${removedProduct.name} has been removed from your favorites.`,
          duration: 2000,
        });
      }
      
      return updatedFavorites;
    });
  };

  const isFavorite = (productId: string) => {
    return favorites.some(fav => fav.product.id === productId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
