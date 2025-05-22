
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/eco-market-data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All', nameAr: 'الكل' },
    { id: 'kitchen', name: 'Kitchen', nameAr: 'مطبخ' },
    { id: 'bathroom', name: 'Bathroom', nameAr: 'حمام' },
    { id: 'living', name: 'Living Room', nameAr: 'غرفة معيشة' },
    { id: 'eco', name: 'Eco-Friendly', nameAr: 'صديق للبيئة' },
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

  return (
    <div className="pb-16"> {/* Bottom padding for the navigation bar */}
      <Header showSearch={true} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Delivery location */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-brand-text-secondary">توصيل إلى</p>
            <h2 className="font-semibold text-brand-text-primary">ساحة العاصي</h2>
          </div>
          <div className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm">
            توصيل
          </div>
        </div>
        
        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-green-800">Eco-Market</h2>
              <p className="text-sm text-green-700">Shop sustainable household products</p>
            </div>
            <img src="/placeholder.svg" className="h-16 w-16" alt="Eco Market" />
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-brand-text-secondary'
                }`}
              >
                {category.nameAr}
              </button>
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
