
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Format the price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <Link to={`/restaurant/${product.id}`} className={`block rounded-lg overflow-hidden shadow-sm bg-white transition-all hover:shadow-md ${featured ? 'border-2 border-green-500' : ''}`}>
      <div className="relative">
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            جديد
          </div>
        )}
        
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {product.discount}% خصم
          </div>
        )}
        
        <div className="aspect-square w-full overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>

        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
          <Heart className="h-4 w-4 text-gray-500" />
        </button>
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-1 text-brand-text-primary">
          {product.name}
        </h3>
        
        <p className="text-xs text-brand-text-secondary mt-1 line-clamp-1">
          {product.category}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="font-bold text-brand-text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs line-through text-gray-400 ml-1">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white text-xs px-2 py-1 h-auto"
          >
            إضافة
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
