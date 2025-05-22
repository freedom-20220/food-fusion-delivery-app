
import { Order } from '@/types';

export const mockOrders: Order[] = [
  {
    id: 'ord-001',
    restaurantId: 'store-1',
    restaurantName: 'منتجات منزلية',
    items: [
      {
        menuItem: {
          id: 'prod-001',
          name: 'مكنسة كهربائية',
          description: 'مكنسة كهربائية بقوة 1800 واط مع فلتر هيبا',
          price: 299.99,
          image: '/placeholder.svg',
          category: 'الأجهزة المنزلية',
        },
        quantity: 1,
      },
      {
        menuItem: {
          id: 'prod-002',
          name: 'طقم أكواب شاي',
          description: 'طقم 6 أكواب شاي من الخزف الفاخر',
          price: 49.99,
          image: '/placeholder.svg',
          category: 'أدوات المطبخ',
        },
        quantity: 2,
      }
    ],
    total: 399.97,
    status: 'delivered',
    createdAt: new Date('2023-05-10T14:30:00'),
    deliveryAddress: 'شارع الملك فهد، الرياض، المملكة العربية السعودية',
    estimatedDeliveryTime: 45,
  },
  {
    id: 'ord-002',
    restaurantId: 'store-2',
    restaurantName: 'سوبر ماركت الخير',
    items: [
      {
        menuItem: {
          id: 'prod-003',
          name: 'أرز بسمتي',
          description: 'كيس أرز بسمتي فاخر 5 كجم',
          price: 39.99,
          image: '/placeholder.svg',
          category: 'مواد غذائية',
        },
        quantity: 2,
      },
      {
        menuItem: {
          id: 'prod-004',
          name: 'زيت زيتون',
          description: 'زيت زيتون عضوي 1 لتر',
          price: 59.99,
          image: '/placeholder.svg',
          category: 'مواد غذائية',
        },
        quantity: 1,
      }
    ],
    total: 139.97,
    status: 'out-for-delivery',
    createdAt: new Date('2023-05-20T10:15:00'),
    deliveryAddress: 'شارع التحلية، جدة، المملكة العربية السعودية',
    estimatedDeliveryTime: 30,
  },
  {
    id: 'ord-003',
    restaurantId: 'store-1',
    restaurantName: 'منتجات منزلية',
    items: [
      {
        menuItem: {
          id: 'prod-005',
          name: 'مصباح LED',
          description: 'مصباح LED موفر للطاقة قابل للتعديل',
          price: 79.99,
          image: '/placeholder.svg',
          category: 'إضاءة',
        },
        quantity: 3,
      }
    ],
    total: 239.97,
    status: 'pending',
    createdAt: new Date(),
    deliveryAddress: 'شارع الأمير سلطان، الخبر، المملكة العربية السعودية',
    estimatedDeliveryTime: 60,
  },
];
