
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Bell, ShoppingBag, Tag, Zap } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const NotificationsSettingsPage = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    promotions: true,
    orderUpdates: true,
    newProducts: false,
    deliveryAlerts: true,
  });
  
  const { toast } = useToast();
  
  const handleToggle = (key: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      
      // In a real app, this would be sent to a server
      toast({
        title: "تم تحديث إعدادات الإشعارات",
        duration: 2000,
      });
      
      return updated;
    });
  };

  return (
    <div className="pb-16">
      <Header title="إعدادات الإشعارات" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">إعدادات الإشعارات</h2>
            <p className="text-sm text-gray-500">تحكم في الإشعارات التي ترغب في تلقيها</p>
          </div>
          
          <div>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <ShoppingBag className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">تحديثات الطلبات</p>
                  <p className="text-sm text-gray-500">إشعارات بحالة طلباتك وتتبع التوصيل</p>
                </div>
              </div>
              <Switch
                checked={notificationSettings.orderUpdates}
                onCheckedChange={() => handleToggle('orderUpdates')}
              />
            </div>
            
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <Tag className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="font-medium">العروض والتخفيضات</p>
                  <p className="text-sm text-gray-500">إشعارات بأحدث العروض والتخفيضات</p>
                </div>
              </div>
              <Switch
                checked={notificationSettings.promotions}
                onCheckedChange={() => handleToggle('promotions')}
              />
            </div>
            
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">منتجات جديدة</p>
                  <p className="text-sm text-gray-500">إشعارات عند إضافة منتجات جديدة</p>
                </div>
              </div>
              <Switch
                checked={notificationSettings.newProducts}
                onCheckedChange={() => handleToggle('newProducts')}
              />
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <div className="bg-amber-100 p-2 rounded-lg mr-3">
                  <Bell className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">تنبيهات التوصيل</p>
                  <p className="text-sm text-gray-500">إشعارات عند قرب وصول طلبك</p>
                </div>
              </div>
              <Switch
                checked={notificationSettings.deliveryAlerts}
                onCheckedChange={() => handleToggle('deliveryAlerts')}
              />
            </div>
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default NotificationsSettingsPage;
