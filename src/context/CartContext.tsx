
import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (menuItem: MenuItem) => void;
  removeFromCart: (menuItemId: string) => void;
  increaseQuantity: (menuItemId: string) => void;
  decreaseQuantity: (menuItemId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (menuItem: MenuItem) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.menuItem.id === menuItem.id);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        return [...prevItems, { menuItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (menuItemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.menuItem.id !== menuItemId));
  };

  const increaseQuantity = (menuItemId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.menuItem.id === menuItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (menuItemId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.menuItem.id === menuItemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => !(item.menuItem.id === menuItemId && item.quantity <= 1))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.menuItem.price * item.quantity,
      0
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
