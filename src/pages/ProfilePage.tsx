
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  Heart, 
  Package, 
  CreditCard, 
  LogOut, 
  User, 
  Bell,
  ChevronRight,
  Menu
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

const ProfilePage = () => {
  // This would normally come from an authentication context
  const user = {
    name: 'محمد أحمد',
    email: 'mohammed@example.com',
    phone: '+970 59 123 4567',
  };
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      navigate('/login');
    }
    
    // Check if user is admin
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, [navigate]);

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "شكراً لاستخدامك تطبيقنا",
      duration: 3000,
    });
    
    // Redirect to login page after logout
    navigate('/login');
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

  const categoryItems = [
    {
      title: 'مطبخ',
      subcategories: ['أدوات المطبخ', 'أواني الطبخ', 'أدوات التقطيع', 'أجهزة صغيرة'],
    },
    {
      title: 'حمام',
      subcategories: ['مناشف', 'أدوات استحمام', 'إكسسوارات الحمام', 'منظفات'],
    },
    {
      title: 'غرفة معيشة',
      subcategories: ['ديكورات', 'وسائد', 'سجاد', 'إضاءة'],
    },
    {
      title: 'صديق للبيئة',
      subcategories: ['منتجات قابلة للتحلل', 'إعادة تدوير', 'مواد عضوية', 'توفير طاقة'],
    },
  ];

  return (
    <div className="pb-16 bg-gray-50">
      <Header title="الحساب الشخصي" />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-4">
              <User className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="font-semibold text-xl">{user.name}</h2>
              <p className="text-sm text-brand-text-secondary">{user.email}</p>
              <p className="text-sm text-brand-text-secondary">{user.phone}</p>
            </div>
          </div>
          <Link to="/edit-profile">
            <Button
              className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              تعديل الحساب
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {menuItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              className={`flex items-center p-4 hover:bg-gray-50 transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mr-4">
                <item.icon className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-brand-text-secondary">{item.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">الفئات</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">قائمة الفئات</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuGroup>
                    {categoryItems.map((category, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link to={`/search?category=${category.title}`}>
                          {category.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {categoryItems.map((category, index) => (
              <AccordionItem key={index} value={`category-${index}`}>
                <AccordionTrigger className="px-4 py-2 hover:bg-gray-50 font-medium">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="py-1">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <Link 
                        key={subIndex} 
                        to={`/search?category=${category.title}&subcategory=${subcategory}`}
                        className="block px-8 py-2 text-sm hover:bg-gray-50 transition-colors"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <Button
          className="w-full bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center gap-2 py-6"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          <span>تسجيل الخروج</span>
        </Button>

        {/* Admin Panel Link - Only shown if user is admin */}
        {isAdmin && (
          <Link to="/admin">
            <Button
              variant="outline"
              className="w-full border-dashed border-gray-300 text-gray-600 flex items-center justify-center gap-2"
            >
              <Settings className="h-5 w-5" />
              <span>لوحة التحكم (الإدارة)</span>
            </Button>
          </Link>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default ProfilePage;
