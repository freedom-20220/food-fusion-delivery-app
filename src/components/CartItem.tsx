
import React from 'react';
import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  return (
    <div className="flex items-center justify-between py-4 border-b last:border-0">
      <div className="flex items-center">
        {item.menuItem.image && (
          <div className="w-16 h-16 mr-4 flex-shrink-0">
            <img 
              src={item.menuItem.image} 
              alt={item.menuItem.name} 
              className="w-full h-full object-cover rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
        )}
        
        <div>
          <h3 className="font-medium">{item.menuItem.name}</h3>
          <p className="text-sm text-brand-text-secondary mt-1">
            {formatPrice(item.menuItem.price)} × {item.quantity}
          </p>
          <p className="font-medium text-brand-text-primary mt-1">
            {formatPrice(item.menuItem.price * item.quantity)}
          </p>
        </div>
      </div>
      
      <div className="flex items-center">
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 w-8 p-0 rounded-full"
          onClick={() => decreaseQuantity(item.menuItem.id)}
        >
          -
        </Button>
        
        <span className="mx-3 w-5 text-center">{item.quantity}</span>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 w-8 p-0 rounded-full"
          onClick={() => increaseQuantity(item.menuItem.id)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
