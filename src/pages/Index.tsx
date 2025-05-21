
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurants } from '@/data/mock-data';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All', nameAr: 'الكل' },
    { id: 'chicken', name: 'Chicken', nameAr: 'دجاج' },
    { id: 'pizza', name: 'Pizza', nameAr: 'بيتزا' },
    { id: 'burgers', name: 'Burgers', nameAr: 'برغر' },
    { id: 'fast-food', name: 'Fast Food', nameAr: 'وجبات سريعة' },
  ];

  const filteredRestaurants = activeCategory === 'all' 
    ? restaurants 
    : restaurants.filter(restaurant => 
        restaurant.cuisine.toLowerCase().includes(activeCategory) || 
        (restaurant.cuisineAr && restaurant.cuisineAr.includes(activeCategory))
      );

  return (
    <div className="pb-16"> {/* Bottom padding for the navigation bar */}
      <Header showSearch={true} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Delivery location */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-brand-text-secondary">توصيل إلى</p>
            <h2 className="font-semibold text-brand-text-primary">ساحة العاصي</h2>
          </div>
          <div className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm">
            توصيل
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-brand-orange text-white'
                    : 'bg-gray-100 text-brand-text-secondary'
                }`}
              >
                {category.nameAr}
              </button>
            ))}
          </div>
        </div>
        
        {/* Restaurant count */}
        <div className="mb-4">
          <p className="text-sm text-brand-text-secondary">
            المطاعم المتاحة: {filteredRestaurants.length}
          </p>
        </div>
        
        {/* Restaurant list */}
        <div className="space-y-4">
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
