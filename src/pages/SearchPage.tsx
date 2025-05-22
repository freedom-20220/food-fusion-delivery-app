
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/eco-market-data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.nameAr && product.nameAr.includes(searchTerm)) ||
    (product.descriptionAr && product.descriptionAr.includes(searchTerm)) ||
    (product.categoryAr && product.categoryAr.includes(searchTerm))
  );

  return (
    <div className="pb-16">
      <Header title="البحث" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="ابحث عن المنتجات..."
            className="w-full pl-10 pr-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
        
        {searchTerm && (
          <div className="mb-4">
            <p className="text-sm text-brand-text-secondary">
              نتائج البحث ({filteredProducts.length})
            </p>
          </div>
        )}
        
        {searchTerm ? (
          filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
                <Search className="w-full h-full" />
              </div>
              <h2 className="text-xl font-semibold text-brand-text-primary mb-2">لا توجد نتائج</h2>
              <p className="text-brand-text-secondary">
                لم نتمكن من العثور على أي منتجات تطابق "{searchTerm}"
              </p>
            </div>
          )
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">الفئات الشائعة</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['مطبخ', 'حمام', 'غرفة معيشة', 'صديق للبيئة'].map((category) => (
                  <button 
                    key={category}
                    onClick={() => setSearchTerm(category)}
                    className="bg-gray-100 hover:bg-gray-200 rounded-lg p-3 text-center"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">بحث شائع</h3>
              <div className="flex flex-wrap gap-2">
                {['أكياس قابلة للاستخدام', 'قطن عضوي', 'خيزران', 'صديق للبيئة', 'معاد التدوير'].map((term) => (
                  <button 
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">تصفح مؤخرًا</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default SearchPage;
