
// Restaurant type definition
export interface Restaurant {
  id: string;
  name: string;
  nameAr?: string;
  logo: string;
  cuisine: string;
  cuisineAr?: string;
  rating: number;
  deliveryTime: number;
  deliveryFee: number | null;
  minOrder: number;
  freeDelivery?: boolean;
  offer?: boolean;
}

// Product type definition for eco-market
export interface Product {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  categoryAr?: string;
  discount: number;
  rating: number;
  inStock: boolean;
  popular?: boolean;
  featured?: boolean;
  isNew?: boolean;
  quantity?: number;
}

// Menu item type definition
export interface MenuItem {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

// Cart item type definition
export interface CartItem {
  menuItem: MenuItem | Product;
  quantity: number;
}

// Order status type definition
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';

// Order type definition
export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  deliveryAddress: string;
  estimatedDeliveryTime?: number;
}
