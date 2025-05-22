
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminAddProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    category: '',
    image: '',
    inStock: true,
    quantity: '100',
    deliveryOption: 'standard',
    featured: false,
    popular: false,
    isNew: false,
    eco: false,
  });
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const categories = [
    { value: 'kitchen', label: 'مطبخ' },
    { value: 'bathroom', label: 'حمام' },
    { value: 'living', label: 'غرفة معيشة' },
    { value: 'eco', label: 'صديق للبيئة' },
  ];
  
  const deliveryOptions = [
    { value: 'standard', label: 'توصيل قياسي (1-3 أيام)' },
    { value: 'express', label: 'توصيل سريع (24 ساعة)' },
    { value: 'sameday', label: 'توصيل في نفس اليوم' },
  ];
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProduct({ ...product, image: URL.createObjectURL(file) });
      setImagePreview(URL.createObjectURL(file));
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  
  const handleSwitchChange = (name: string, value: boolean) => {
    setProduct({ ...product, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save the product to the database
    toast({
      title: "تم إضافة المنتج",
      description: "تم إضافة المنتج بنجاح",
      duration: 2000,
    });
    
    navigate('/admin/products');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center">
          <Link to="/admin/products" className="mr-3">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">إضافة منتج جديد</h1>
        </div>
      </div>
      
      <div className="px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">معلومات المنتج</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  اسم المنتج *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  وصف المنتج *
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    السعر ($) *
                  </label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    value={product.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 mb-1">
                    السعر الأصلي ($)
                  </label>
                  <Input
                    id="originalPrice"
                    name="originalPrice"
                    type="number"
                    step="0.01"
                    value={product.originalPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  الفئة *
                </label>
                <Select 
                  value={product.category}
                  onValueChange={(value) => setProduct({...product, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر فئة" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">صورة المنتج</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
              {imagePreview ? (
                <div className="mb-4">
                  <img 
                    src={imagePreview} 
                    alt="Product preview" 
                    className="h-40 object-contain"
                  />
                </div>
              ) : (
                <div className="text-center mb-4">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">اسحب الصورة هنا أو اضغط للتحميل</p>
                </div>
              )}
              
              <div>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label htmlFor="image-upload">
                  <Button 
                    type="button" 
                    variant="outline"
                    className="mt-2"
                  >
                    {imagePreview ? 'تغيير الصورة' : 'تحميل صورة'}
                  </Button>
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">المخزون والتوصيل</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">متوفر في المخزون</p>
                </div>
                <Switch
                  checked={product.inStock}
                  onCheckedChange={(checked) => handleSwitchChange('inStock', checked)}
                />
              </div>
              
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  الكمية المتاحة
                </label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={product.quantity}
                  onChange={handleInputChange}
                  disabled={!product.inStock}
                />
              </div>
              
              <div>
                <label htmlFor="deliveryOption" className="block text-sm font-medium text-gray-700 mb-1">
                  خيار التوصيل
                </label>
                <Select 
                  value={product.deliveryOption}
                  onValueChange={(value) => setProduct({...product, deliveryOption: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {deliveryOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">خصائص إضافية</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">منتج مميز</p>
                  <p className="text-sm text-gray-500">عرض في قسم المنتجات المميزة</p>
                </div>
                <Switch
                  checked={product.featured}
                  onCheckedChange={(checked) => handleSwitchChange('featured', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">منتج جديد</p>
                  <p className="text-sm text-gray-500">إضافة علامة "جديد" للمنتج</p>
                </div>
                <Switch
                  checked={product.isNew}
                  onCheckedChange={(checked) => handleSwitchChange('isNew', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">منتج شائع</p>
                  <p className="text-sm text-gray-500">إضافة للمنتجات الأكثر مبيعًا</p>
                </div>
                <Switch
                  checked={product.popular}
                  onCheckedChange={(checked) => handleSwitchChange('popular', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">صديق للبيئة</p>
                  <p className="text-sm text-gray-500">تمييز المنتج كصديق للبيئة</p>
                </div>
                <Switch
                  checked={product.eco}
                  onCheckedChange={(checked) => handleSwitchChange('eco', checked)}
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
              حفظ المنتج
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1" 
              onClick={() => navigate('/admin/products')}
            >
              إلغاء
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProductPage;
