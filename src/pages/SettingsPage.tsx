
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Globe, Moon, User, Bell, Shield, Languages } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    language: 'ar',
    darkMode: false,
  });
  
  const { toast } = useToast();
  
  const handleLanguageChange = (value: string) => {
    setSettings(prev => ({ ...prev, language: value }));
    
    toast({
      title: "تم تغيير اللغة",
      description: value === 'ar' ? "تم تغيير اللغة إلى العربية" : "Language changed to English",
      duration: 2000,
    });
  };
  
  const handleDarkModeToggle = () => {
    setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
    
    toast({
      title: settings.darkMode ? "تم تفعيل الوضع الفاتح" : "تم تفعيل الوضع المظلم",
      duration: 2000,
    });
    
    // In a real app, this would apply dark mode to the app
  };

  return (
    <div className="pb-16">
      <Header title="الإعدادات" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">تفضيلات التطبيق</h2>
          </div>
          
          <div>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">اللغة</p>
                </div>
              </div>
              <Select
                value={settings.language}
                onValueChange={handleLanguageChange}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="اختر اللغة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <Moon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">الوضع المظلم</p>
                </div>
              </div>
              <Switch
                checked={settings.darkMode}
                onCheckedChange={handleDarkModeToggle}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">الحساب</h2>
          </div>
          
          <div>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 h-auto rounded-none"
            >
              <User className="h-5 w-5 mr-3 text-gray-600" />
              <span>تعديل الملف الشخصي</span>
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 h-auto rounded-none border-t"
            >
              <Bell className="h-5 w-5 mr-3 text-gray-600" />
              <span>إعدادات الإشعارات</span>
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 h-auto rounded-none border-t"
            >
              <Shield className="h-5 w-5 mr-3 text-gray-600" />
              <span>الأمان والخصوصية</span>
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 h-auto rounded-none border-t"
            >
              <Languages className="h-5 w-5 mr-3 text-gray-600" />
              <span>اللغة والمنطقة</span>
            </Button>
          </div>
        </div>
        
        <Button
          variant="destructive"
          className="w-full"
        >
          تسجيل الخروج
        </Button>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default SettingsPage;
