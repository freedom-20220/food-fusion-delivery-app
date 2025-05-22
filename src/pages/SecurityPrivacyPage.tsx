
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import { Shield, Lock, Eye, Fingerprint } from 'lucide-react';

const SecurityPrivacyPage = () => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    biometricLogin: true,
    locationTracking: true,
    dataSharing: false,
  });
  
  const { toast } = useToast();
  
  const handleToggle = (key: keyof typeof securitySettings) => {
    setSecuritySettings(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      
      // In a real app, this would be sent to the server
      toast({
        title: "تم تحديث إعدادات الأمان",
        duration: 2000,
      });
      
      return updated;
    });
  };
  
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم تغيير كلمة المرور",
      description: "تم تغيير كلمة المرور بنجاح",
      duration: 2000,
    });
  };

  return (
    <div className="pb-16">
      <Header title="الأمان والخصوصية" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">إعدادات الأمان</h2>
          </div>
          
          <div>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">المصادقة الثنائية</p>
                  <p className="text-sm text-gray-500">تأمين حسابك بخطوة إضافية</p>
                </div>
              </div>
              <Switch
                checked={securitySettings.twoFactorAuth}
                onCheckedChange={() => handleToggle('twoFactorAuth')}
              />
            </div>
            
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <Fingerprint className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">تسجيل الدخول البيومتري</p>
                  <p className="text-sm text-gray-500">استخدام بصمة الإصبع أو بصمة الوجه</p>
                </div>
              </div>
              <Switch
                checked={securitySettings.biometricLogin}
                onCheckedChange={() => handleToggle('biometricLogin')}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">تغيير كلمة المرور</h2>
          </div>
          
          <form onSubmit={handleChangePassword} className="p-4 space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                كلمة المرور الحالية
              </label>
              <Input id="current-password" type="password" />
            </div>
            
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                كلمة المرور الجديدة
              </label>
              <Input id="new-password" type="password" />
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                تأكيد كلمة المرور الجديدة
              </label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 mt-2">
              تغيير كلمة المرور
            </Button>
          </form>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">الخصوصية</h2>
          </div>
          
          <div>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">تتبع الموقع</p>
                  <p className="text-sm text-gray-500">السماح للتطبيق بتتبع موقعك</p>
                </div>
              </div>
              <Switch
                checked={securitySettings.locationTracking}
                onCheckedChange={() => handleToggle('locationTracking')}
              />
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <div className="bg-amber-100 p-2 rounded-lg mr-3">
                  <Eye className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">مشاركة البيانات</p>
                  <p className="text-sm text-gray-500">مشاركة بيانات الاستخدام لتحسين الخدمة</p>
                </div>
              </div>
              <Switch
                checked={securitySettings.dataSharing}
                onCheckedChange={() => handleToggle('dataSharing')}
              />
            </div>
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default SecurityPrivacyPage;
