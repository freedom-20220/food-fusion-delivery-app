
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const BottomNavigation = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-10">
      <div className="flex justify-around items-center py-2">
        <Link 
          to="/" 
          className={`flex flex-col items-center p-2 ${isActive('/') ? 'text-green-600' : 'text-gray-500'}`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">الرئيسية</span>
        </Link>

        <Link 
          to="/search" 
          className={`flex flex-col items-center p-2 ${isActive('/search') ? 'text-green-600' : 'text-gray-500'}`}
        >
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">البحث</span>
        </Link>

        <Link 
          to="/cart" 
          className={`flex flex-col items-center p-2 relative ${isActive('/cart') ? 'text-green-600' : 'text-gray-500'}`}
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1 -right-1 bg-green-600 h-5 w-5 flex items-center justify-center p-0 rounded-full">
              {totalItems}
            </Badge>
          )}
          <span className="text-xs mt-1">السلة</span>
        </Link>

        <Link 
          to="/profile" 
          className={`flex flex-col items-center p-2 ${isActive('/profile') ? 'text-green-600' : 'text-gray-500'}`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">الحساب</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;
