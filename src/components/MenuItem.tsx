
import React from 'react';
import { MenuItem as MenuItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  const handleAddToCart = () => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row animate-fade-in">
      <div className="flex-grow">
        <h3 className="font-medium text-lg">{item.name}</h3>
        {item.nameAr && <p className="text-sm text-brand-text-secondary">{item.nameAr}</p>}
        
        <p className="mt-2 text-sm text-brand-text-secondary line-clamp-2">{item.description}</p>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="font-medium">{formatPrice(item.price)}</span>
          <Button 
            onClick={handleAddToCart}
            className="bg-brand-orange hover:bg-brand-orange-dark text-white px-4 py-1 h-auto"
          >
            إضافة
          </Button>
        </div>
      </div>
      
      {item.image && (
        <div className="md:w-24 md:h-24 h-32 w-full md:ml-4 mt-4 md:mt-0 flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover rounded-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>
      )}
      
      {item.popular && (
        <div className="absolute top-2 right-2">
          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
