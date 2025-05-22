
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    language: localStorage.getItem('appLanguage') || 'ar',
    darkMode: localStorage.getItem('darkMode') === 'true',
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Apply dark mode on mount
    applyDarkMode(settings.darkMode);
  }, []);
  
  const handleLanguageChange = (value: string) => {
    setSettings(prev => ({ ...prev, language: value }));
    localStorage.setItem('appLanguage', value);
    
    toast({
      title: value === 'ar' ? "تم تغيير اللغة" : "Language Changed",
      description: value === 'ar' ? "تم تغيير اللغة إلى العربية" : "Language changed to English",
      duration: 2000,
    });
    
    // In a real app, this would change all the app's text to the selected language
    document.documentElement.dir = value === 'ar' ? 'rtl' : 'ltr';
  };
  
  const applyDarkMode = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--background', '222.2 84% 4.9%');
      document.documentElement.style.setProperty('--foreground', '210 40% 98%');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--background', '0 0% 100%');
      document.documentElement.style.setProperty('--foreground', '222.2 84% 4.9%');
    }
  };
  
  const handleDarkModeToggle = () => {
    const newDarkMode = !settings.darkMode;
    setSettings(prev => ({ ...prev, darkMode: newDarkMode }));
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    applyDarkMode(newDarkMode);
    
    toast({
      title: newDarkMode ? "تم تفعيل الوضع المظلم" : "تم تفعيل الوضع الفاتح",
      duration: 2000,
    });
  };
  
  const navigateToPage = (path: string) => {
    navigate(path);
  };
  
  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    
    toast({
      title: "تم تسجيل الخروج بنجاح",
      duration: 2000,
    });
    
    // Redirect to login screen
    navigate('/login');
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
              onClick={() => navigateToPage('/edit-profile')}
            >
              <User className="h-5 w-5 mr-3 text-gray-600" />
              <span>تعديل الملف الشخصي</span>
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 h-auto rounded-none border-t"
              onClick={() => navigateToPage('/notifications-settings')}
            >
              <Bell className="h-5 w-5 mr-3 text-gray-600" />
              <span>إعدادات الإشعارات</span>
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 h-auto rounded-none border-t"
              onClick={() => navigateToPage('/security-privacy')}
            >
              <Shield className="h-5 w-5 mr-3 text-gray-600" />
              <span>الأمان والخصوصية</span>
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 h-auto rounded-none border-t"
              onClick={() => navigateToPage('/language-region')}
            >
              <Languages className="h-5 w-5 mr-3 text-gray-600" />
              <span>اللغة والمنطقة</span>
            </Button>
          </div>
        </div>
        
        <Button
          variant="destructive"
          className="w-full"
          onClick={handleLogout}
        >
          تسجيل الخروج
        </Button>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default SettingsPage;
