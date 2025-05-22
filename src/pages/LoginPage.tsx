
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to authentication
    if (email === 'admin@example.com' && password === 'admin') {
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/admin');
      return;
    }
    
    // Mock login for standard user
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'false');
      
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "مرحباً بك في تطبيق Eco-Market",
        duration: 2000,
      });
      
      navigate('/');
    } else {
      toast({
        title: "خطأ في تسجيل الدخول",
        description: "يرجى التحقق من بيانات الدخول",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">Eco-Market</h1>
          <p className="text-gray-600 mt-2">منتجات منزلية صديقة للبيئة</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-center mb-6">تسجيل الدخول</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                البريد الإلكتروني
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                كلمة المرور
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                required
              />
            </div>
            
            <div className="text-right">
              <a href="#" className="text-sm text-green-600 hover:text-green-700">
                نسيت كلمة المرور؟
              </a>
            </div>
            
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              تسجيل الدخول
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{" "}
              <Link to="/signup" className="text-green-600 hover:text-green-700 font-medium">
                إنشاء حساب
              </Link>
            </p>
          </div>
          
          <div className="mt-8">
            <p className="text-center text-gray-500 text-xs">
              بيانات الدخول كمشرف للتجربة:
              <br />admin@example.com / admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
