
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { useToast } from '@/hooks/use-toast';
import { Check, Globe } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const LanguageRegionPage = () => {
  const [language, setLanguage] = useState('ar');
  const [region, setRegion] = useState('PS');
  const { toast } = useToast();
  
  const languages = [
    { code: 'ar', name: 'العربية', nameEn: 'Arabic' },
    { code: 'en', name: 'English', nameEn: 'English' },
  ];
  
  const regions = [
    { code: 'PS', name: 'فلسطين', nameEn: 'Palestine' },
    { code: 'JO', name: 'الأردن', nameEn: 'Jordan' },
    { code: 'EG', name: 'مصر', nameEn: 'Egypt' },
    { code: 'SA', name: 'السعودية', nameEn: 'Saudi Arabia' },
    { code: 'AE', name: 'الإمارات', nameEn: 'UAE' },
  ];
  
  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    
    toast({
      title: value === 'ar' ? "تم تغيير اللغة" : "Language Changed",
      description: value === 'ar' ? "تم تغيير اللغة إلى العربية" : "Language changed to English",
      duration: 2000,
    });
    
    // In a real app, this would update the app language
    localStorage.setItem('appLanguage', value);
    
    // Simulate language change
    document.documentElement.dir = value === 'ar' ? 'rtl' : 'ltr';
    // In a real app, we would use i18n library to change translations
  };
  
  const handleRegionChange = (value: string) => {
    setRegion(value);
    
    const regionName = regions.find(r => r.code === value)?.name;
    
    toast({
      title: "تم تغيير المنطقة",
      description: `تم تغيير المنطقة إلى ${regionName}`,
      duration: 2000,
    });
  };

  return (
    <div className="pb-16">
      <Header title="اللغة والمنطقة" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">إعدادات اللغة والمنطقة</h2>
            <p className="text-sm text-gray-500">تخصيص تجربة التطبيق وفقاً لمنطقتك</p>
          </div>
          
          <div className="p-4 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                اللغة
              </label>
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center justify-between w-full">
                        <span>{lang.code === 'ar' ? lang.name : lang.nameEn}</span>
                        {language === lang.code && (
                          <Check className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                المنطقة
              </label>
              <Select value={region} onValueChange={handleRegionChange}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((reg) => (
                    <SelectItem key={reg.code} value={reg.code}>
                      <div className="flex items-center justify-between w-full">
                        <span>{language === 'ar' ? reg.name : reg.nameEn}</span>
                        {region === reg.code && (
                          <Check className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default LanguageRegionPage;
