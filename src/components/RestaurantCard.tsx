
import React from 'react';
import { Link } from 'react-router-dom';
import { Restaurant } from '@/types';
import { Clock } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  // Format the minimum order price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  return (
    <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card">
      {restaurant.freeDelivery && (
        <div className="badge-free-delivery">توصيل مجاني</div>
      )}
      {restaurant.offer && (
        <div className="badge-offer">عروض</div>
      )}
      
      <div className="flex-shrink-0 w-16 h-16 mr-4">
        <img 
          src={restaurant.logo} 
          alt={restaurant.name}
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-semibold text-brand-text-primary">
          {restaurant.name} - {restaurant.nameAr}
        </h3>
        
        <p className="text-sm text-brand-text-secondary mt-1">
          {restaurant.cuisine} • {restaurant.cuisineAr}
        </p>
        
        <div className="flex items-center mt-2 text-sm text-brand-text-secondary">
          <div className="flex items-center">
            <span className="text-amber-500">★</span>
            <span className="ml-1">{restaurant.rating}</span>
          </div>
          
          <span className="dot-separator"></span>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{restaurant.deliveryTime} دقيقة</span>
          </div>
          
          <span className="dot-separator"></span>
          
          <div>
            <span>الحد الأدنى للطلب: {formatPrice(restaurant.minOrder)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
