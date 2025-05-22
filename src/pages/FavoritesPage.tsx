
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { useFavorites } from '@/context/FavoritesContext';
import ProductCard from '@/components/ProductCard';
import { Heart } from 'lucide-react';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="pb-16">
      <Header title="المفضلة" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {favorites.map((favorite) => (
              <ProductCard
                key={favorite.id}
                product={favorite.product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
              <Heart className="w-full h-full" />
            </div>
            <h2 className="text-xl font-semibold text-brand-text-primary mb-2">لا توجد منتجات مفضلة</h2>
            <p className="text-brand-text-secondary mb-6">لم تضف أي منتجات إلى قائمة المفضلة بعد</p>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default FavoritesPage;
