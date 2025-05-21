
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import MenuItem from '@/components/MenuItem';
import { restaurants, menuItems } from '@/data/mock-data';
import { MenuItem as MenuItemType } from '@/types';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(restaurants.find(r => r.id === id));
  const [menu, setMenu] = useState<MenuItemType[]>([]);
  
  useEffect(() => {
    if (id && menuItems[id]) {
      setMenu(menuItems[id]);
    }
    
    if (!restaurant) {
      navigate('/');
    }
  }, [id, navigate, restaurant]);

  if (!restaurant) {
    return null;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  // Group menu items by category
  const menuByCategory: Record<string, MenuItemType[]> = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItemType[]>);

  return (
    <div className="pb-16"> {/* Bottom padding for the navigation bar */}
      <Header showBackButton={true} />
      
      <div className="bg-brand-orange text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-20 h-20 mr-4 bg-white rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={restaurant.logo} 
                alt={restaurant.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            
            <div>
              <h1 className="text-xl font-bold">{restaurant.name}</h1>
              <p className="text-sm opacity-90 mt-1">{restaurant.cuisine}</p>
              
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <span className="text-amber-300">★</span>
                  <span className="ml-1">{restaurant.rating}</span>
                </div>
                
                <span className="mx-2">•</span>
                
                <div>
                  <span>{restaurant.deliveryTime} دقيقة</span>
                </div>
                
                <span className="mx-2">•</span>
                
                <div>
                  <span>الحد الأدنى: {formatPrice(restaurant.minOrder)}</span>
                </div>
              </div>
              
              {restaurant.freeDelivery && (
                <div className="mt-1 text-sm">
                  <span className="bg-white text-brand-orange px-2 py-0.5 rounded-full text-xs">توصيل مجاني</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-6">
        {/* Menu categories */}
        {Object.entries(menuByCategory).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="space-y-4">
              {items.map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default RestaurantDetail;
