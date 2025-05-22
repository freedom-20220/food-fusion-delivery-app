
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

// Favorites type definition
export interface Favorite {
  id: string;
  userId: string;
  product: Product;
  createdAt: Date;
}

// Payment method type definition
export interface PaymentMethod {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  isDefault: boolean;
}

// Notification settings type definition
export interface NotificationSettings {
  promotions: boolean;
  orderUpdates: boolean;
  newProducts: boolean;
  deliveryAlerts: boolean;
}

// User settings type definition
export interface UserSettings {
  language: 'en' | 'ar';
  darkMode: boolean;
  notificationSettings: NotificationSettings;
}
