import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const CartPage = () => {
  const {
    cartItems,
    getCartTotal,
    clearCart
  } = useCart();
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };
  const handleCheckout = () => {
    // In a real app, you would navigate to checkout
    toast({
      title: "Order placed successfully!",
      description: "Your order has been placed and is being processed.",
      duration: 3000
    });
    clearCart();
    navigate('/');
  };
  return <div className="pb-16"> {/* Bottom padding for the navigation bar */}
      <Header title="السلة" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        {cartItems.length > 0 ? <>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              {cartItems.map(item => <CartItem key={item.menuItem.id} item={item} />)}
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h3 className="font-semibold mb-4">ملخص الطلب</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">المجموع الفرعي</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">رسوم التوصيل</span>
                  <span>0</span>
                </div>
                
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>المجموع</span>
                    <span>{formatPrice(getCartTotal())}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button onClick={handleCheckout} className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white py-3 h-auto">
              إتمام الطلب
            </Button>
          </> : <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
              <ShoppingCart />
            </div>
            <h2 className="text-xl font-semibold text-brand-text-primary mb-2">سلة التسوق فارغة</h2>
            <p className="text-brand-text-secondary mb-6">لم تضف أي منتجات إلى سلة التسوق بعد</p>
            <Button onClick={() => navigate('/')} className="bg-brand-orange hover:bg-brand-orange-dark text-white">استعرض المنتجات</Button>
          </div>}
      </main>
      
      <BottomNavigation />
    </div>;
};

// Simple cart icon component for empty state
const ShoppingCart = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>;
export default CartPage;