
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/eco-market-data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  
  const categories = [
    { 
      id: 'all', 
      name: 'All', 
      nameAr: 'الكل',
      subcategories: [] 
    },
    { 
      id: 'kitchen', 
      name: 'Kitchen', 
      nameAr: 'مطبخ',
      subcategories: ['أدوات المطبخ', 'أواني الطبخ', 'أدوات التقطيع', 'أجهزة صغيرة'] 
    },
    { 
      id: 'bathroom', 
      name: 'Bathroom', 
      nameAr: 'حمام',
      subcategories: ['مناشف', 'أدوات استحمام', 'إكسسوارات الحمام', 'منظفات'] 
    },
    { 
      id: 'living', 
      name: 'Living Room', 
      nameAr: 'غرفة معيشة',
      subcategories: ['ديكورات', 'وسائد', 'سجاد', 'إضاءة'] 
    },
    { 
      id: 'eco', 
      name: 'Eco-Friendly', 
      nameAr: 'صديق للبيئة',
      subcategories: ['منتجات قابلة للتحلل', 'إعادة تدوير', 'مواد عضوية', 'توفير طاقة'] 
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => 
        product.category.toLowerCase().includes(activeCategory) || 
        (product.categoryAr && product.categoryAr.includes(activeCategory))
      );

  // Featured products
  const featuredProducts = products.filter(product => product.featured);
  
  // New arrivals
  const newArrivals = products.filter(product => product.isNew);
  
  // Popular products
  const popularProducts = products.filter(product => product.popular);

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="pb-16 bg-gray-50"> 
      <Header showSearch={true} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Delivery location */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-brand-text-secondary">توصيل إلى</p>
            <h2 className="font-semibold text-brand-text-primary">ساحة العاصي</h2>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm shadow-sm">
            توصيل
          </div>
        </div>
        
        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg mb-8 shadow-sm animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-green-800">Eco-Market</h2>
              <p className="text-sm text-green-700">منتجات منزلية صديقة للبيئة</p>
            </div>
            <img src="/placeholder.svg" className="h-16 w-16" alt="Eco Market" />
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-6 overflow-hidden">
          <h2 className="text-lg font-semibold mb-3">الفئات</h2>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {categories.map(category => (
              <div key={category.id} className="flex flex-col">
                <Collapsible 
                  open={openCategory === category.id} 
                  onOpenChange={() => toggleCategory(category.id)}
                  className={`w-full overflow-hidden border rounded-lg ${
                    activeCategory === category.id 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <CollapsibleTrigger 
                    asChild 
                    className="w-full"
                    onClick={(e) => {
                      // Prevent toggle if we're just selecting the category
                      if (category.subcategories.length === 0) {
                        e.preventDefault();
                      }
                      setActiveCategory(category.id);
                    }}
                  >
                    <button className="flex items-center justify-between w-full px-4 py-3 focus:outline-none">
                      <span className="font-medium">{category.nameAr}</span>
                      {category.subcategories.length > 0 && (
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          openCategory === category.id ? 'transform rotate-180' : ''
                        }`} />
                      )}
                    </button>
                  </CollapsibleTrigger>
                  
                  {category.subcategories.length > 0 && (
                    <CollapsibleContent>
                      <div className="border-t border-gray-100">
                        {category.subcategories.map((subcategory, index) => (
                          <button
                            key={index}
                            className="w-full text-right px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                            onClick={() => {
                              setActiveCategory(category.id);
                              // In a real app, you would filter by subcategory here
                            }}
                          >
                            {subcategory}
                          </button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  )}
                </Collapsible>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products Carousel */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">العروض المميزة</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <ProductCard product={product} featured={true} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        
        {/* New Arrivals */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">وصل حديثاً</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {newArrivals.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Most Popular */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">الأكثر مبيعاً</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* All Products */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">
            المنتجات ({filteredProducts.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
