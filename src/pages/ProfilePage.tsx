
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Settings, Heart, Package, CreditCard, LogOut, User, Bell } from 'lucide-react';

const ProfilePage = () => {
  // This would normally come from an authentication context
  const user = {
    name: 'محمد أحمد',
    email: 'mohammed@example.com',
    phone: '+970 59 123 4567',
  };

  const menuItems = [
    {
      icon: Heart,
      title: 'المفضلة',
      description: 'عرض المنتجات المفضلة',
      path: '/favorites',
    },
    {
      icon: Package,
      title: 'طلباتي',
      description: 'تتبع حالة الطلبات الحالية والسابقة',
      path: '/orders',
    },
    {
      icon: CreditCard,
      title: 'طرق الدفع',
      description: 'إدارة بطاقات الائتمان وطرق الدفع',
      path: '/payment-methods',
    },
    {
      icon: Bell,
      title: 'الإشعارات',
      description: 'إعدادات الإشعارات والتنبيهات',
      path: '/notifications-settings',
    },
    {
      icon: Settings,
      title: 'الإعدادات',
      description: 'تعديل حسابك وتفضيلاتك',
      path: '/settings',
    },
  ];

  return (
    <div className="pb-16">
      <Header title="الحساب الشخصي" />
      
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <User className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="font-semibold text-xl">{user.name}</h2>
              <p className="text-sm text-brand-text-secondary">{user.email}</p>
              <p className="text-sm text-brand-text-secondary">{user.phone}</p>
            </div>
          </div>
          <Button
            className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-brand-text-primary"
          >
            تعديل الحساب
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center p-4 ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <item.icon className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-brand-text-secondary">{item.description}</p>
              </div>
              <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <Button
          className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-red-500 flex items-center justify-center gap-2"
        >
          <LogOut className="h-5 w-5" />
          <span>تسجيل الخروج</span>
        </Button>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default ProfilePage;
