
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { User } from 'lucide-react';

const EditProfilePage = () => {
  // This would normally come from a context or API
  const [user, setUser] = useState({
    name: 'محمد أحمد',
    email: 'mohammed@example.com',
    phone: '+970 59 123 4567',
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would update the user profile via API
    toast({
      title: "تم تحديث الملف الشخصي",
      description: "تم حفظ التغييرات بنجاح",
      duration: 2000,
    });
    
    navigate('/profile');
  };

  return (
    <div className="pb-16">
      <Header title="تعديل الملف الشخصي" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                الاسم الكامل
              </label>
              <Input
                id="name"
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                البريد الإلكتروني
              </label>
              <Input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                رقم الهاتف
              </label>
              <Input
                id="phone"
                value={user.phone}
                onChange={(e) => setUser({...user, phone: e.target.value})}
                required
              />
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                حفظ التغييرات
              </Button>
            </div>
          </form>
        </div>
        
        <Button
          variant="outline"
          className="w-full border-dashed"
          onClick={() => navigate('/profile')}
        >
          إلغاء
        </Button>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default EditProfilePage;
