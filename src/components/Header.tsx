
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ShoppingCart, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showSearch?: boolean;
}

const Header = ({ title, showBackButton = false, showSearch = false }: HeaderProps) => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {showBackButton && (
              <button 
                onClick={() => navigate(-1)}
                className="p-1"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            {!showBackButton && (
              <Link to="/" className="flex items-center">
                <span className="font-bold text-xl text-green-600">ECO<span className="text-green-800">MARKET</span></span>
              </Link>
            )}
            {title && <h1 className="text-lg font-semibold">{title}</h1>}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/notifications">
              <Bell className="h-6 w-6 text-gray-600" />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-600 h-5 w-5 flex items-center justify-center p-0 rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </div>
        </div>

        {showSearch && (
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="ابحث عن المنتجات..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-green-500"
              onClick={() => navigate('/search')}
              readOnly
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
