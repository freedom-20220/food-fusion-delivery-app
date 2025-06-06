
import { Product } from '@/types';

// Mock data for eco-market products
export const products: Product[] = [
  {
    id: 'p1',
    name: 'Bamboo Cutlery Set',
    nameAr: 'طقم أدوات مائدة من الخيزران',
    description: 'Eco-friendly bamboo cutlery set with knife, fork, spoon, and chopsticks in a cotton pouch',
    descriptionAr: 'مجموعة أدوات مائدة صديقة للبيئة مصنوعة من الخيزران تشمل سكين، شوكة، ملعقة، وعيدان أكل في كيس قطني',
    price: 15.99,
    originalPrice: 19.99,
    image: '/placeholder.svg',
    category: 'kitchen',
    categoryAr: 'مطبخ',
    discount: 20,
    rating: 4.8,
    inStock: true,
    featured: true,
    isNew: true,
    popular: true
  },
  {
    id: 'p2',
    name: 'Reusable Produce Bags (Set of 5)',
    nameAr: 'أكياس منتجات قابلة لإعادة الاستخدام (5 قطع)',
    description: 'Mesh produce bags for grocery shopping, replaces plastic bags',
    descriptionAr: 'أكياس شبكية للتسوق، بديل للأكياس البلاستيكية',
    price: 12.99,
    originalPrice: 14.99,
    image: '/placeholder.svg',
    category: 'kitchen',
    categoryAr: 'مطبخ',
    discount: 13,
    rating: 4.5,
    inStock: true,
    featured: false,
    isNew: true,
    popular: true
  },
  {
    id: 'p3',
    name: 'Recycled Glass Soap Dispenser',
    nameAr: 'موزع صابون من الزجاج المعاد تدويره',
    description: 'Elegant bathroom soap dispenser made from recycled glass',
    descriptionAr: 'موزع صابون أنيق للحمام مصنوع من الزجاج المعاد تدويره',
    price: 24.99,
    originalPrice: 29.99,
    image: '/placeholder.svg',
    category: 'bathroom',
    categoryAr: 'حمام',
    discount: 17,
    rating: 4.6,
    inStock: true,
    featured: true,
    isNew: false,
    popular: true
  },
  {
    id: 'p4',
    name: 'Organic Cotton Bath Towel Set',
    nameAr: 'طقم مناشف استحمام من القطن العضوي',
    description: 'Super soft and absorbent, made from 100% organic cotton',
    descriptionAr: 'ناعمة وماصة للغاية، مصنوعة من 100% قطن عضوي',
    price: 39.99,
    originalPrice: 49.99,
    image: '/placeholder.svg',
    category: 'bathroom',
    categoryAr: 'حمام',
    discount: 20,
    rating: 4.7,
    inStock: true,
    featured: false,
    isNew: false,
    popular: false
  },
  {
    id: 'p5',
    name: 'Bamboo Toothbrush Set',
    nameAr: 'طقم فرش أسنان من الخيزران',
    description: 'Pack of 4 biodegradable bamboo toothbrushes',
    descriptionAr: 'عبوة من 4 فرش أسنان قابلة للتحلل مصنوعة من الخيزران',
    price: 9.99,
    originalPrice: 12.99,
    image: '/placeholder.svg',
    category: 'bathroom',
    categoryAr: 'حمام',
    discount: 23,
    rating: 4.3,
    inStock: true,
    featured: false,
    isNew: true,
    popular: true
  },
  {
    id: 'p6',
    name: 'Natural Jute Rug',
    nameAr: 'سجادة من الجوت الطبيعي',
    description: 'Hand-woven jute rug, sustainable and durable',
    descriptionAr: 'سجادة منسوجة يدويًا من الجوت، مستدامة ومتينة',
    price: 59.99,
    originalPrice: 79.99,
    image: '/placeholder.svg',
    category: 'living',
    categoryAr: 'غرفة معيشة',
    discount: 25,
    rating: 4.9,
    inStock: true,
    featured: true,
    isNew: false,
    popular: true
  },
  {
    id: 'p7',
    name: 'Recycled Cotton Throw Pillows',
    nameAr: 'وسائد زينة من القطن المعاد تدويره',
    description: 'Set of 2 decorative pillows made from recycled cotton fabric',
    descriptionAr: 'مجموعة من وسادتين للزينة مصنوعة من قماش القطن المعاد تدويره',
    price: 34.99,
    originalPrice: 39.99,
    image: '/placeholder.svg',
    category: 'living',
    categoryAr: 'غرفة معيشة',
    discount: 13,
    rating: 4.4,
    inStock: true,
    featured: false,
    isNew: true,
    popular: false
  },
  {
    id: 'p8',
    name: 'Stainless Steel Water Bottle',
    nameAr: 'زجاجة ماء من الفولاذ المقاوم للصدأ',
    description: 'Double-walled insulated bottle, BPA-free and eco-friendly',
    descriptionAr: 'زجاجة معزولة بجدار مزدوج، خالية من BPA وصديقة للبيئة',
    price: 19.99,
    originalPrice: 24.99,
    image: '/placeholder.svg',
    category: 'kitchen',
    categoryAr: 'مطبخ',
    discount: 20,
    rating: 4.7,
    inStock: true,
    featured: true,
    isNew: false,
    popular: true
  },
  {
    id: 'p9',
    name: 'Solar-Powered LED Lamp',
    nameAr: 'مصباح LED يعمل بالطاقة الشمسية',
    description: 'Eco-friendly solar lamp for garden or patio',
    descriptionAr: 'مصباح شمسي صديق للبيئة للحديقة أو الفناء',
    price: 29.99,
    originalPrice: 39.99,
    image: '/placeholder.svg',
    category: 'living',
    categoryAr: 'غرفة معيشة',
    discount: 25,
    rating: 4.2,
    inStock: true,
    featured: false,
    isNew: true,
    popular: false
  },
  {
    id: 'p10',
    name: 'Organic Wool Dryer Balls',
    nameAr: 'كرات تجفيف من الصوف العضوي',
    description: 'Set of 6 wool dryer balls, replaces fabric softener and reduces drying time',
    descriptionAr: 'مجموعة من 6 كرات تجفيف صوفية، تحل محل منعم الأقمشة وتقلل وقت التجفيف',
    price: 18.99,
    originalPrice: 22.99,
    image: '/placeholder.svg',
    category: 'eco',
    categoryAr: 'صديق للبيئة',
    discount: 17,
    rating: 4.8,
    inStock: true,
    featured: true,
    isNew: false,
    popular: true
  },
  {
    id: 'p11',
    name: 'Compostable Kitchen Waste Bags',
    nameAr: 'أكياس نفايات المطبخ القابلة للتحلل',
    description: 'Pack of 50 biodegradable and compostable food waste bags',
    descriptionAr: 'عبوة من 50 كيسًا قابلاً للتحلل والتسميد لنفايات الطعام',
    price: 14.99,
    originalPrice: 16.99,
    image: '/placeholder.svg',
    category: 'kitchen',
    categoryAr: 'مطبخ',
    discount: 12,
    rating: 4.5,
    inStock: true,
    featured: false,
    isNew: true,
    popular: false
  },
  {
    id: 'p12',
    name: 'Beeswax Food Wraps',
    nameAr: 'أغلفة طعام من شمع العسل',
    description: 'Reusable food wraps, eco-friendly alternative to plastic wrap',
    descriptionAr: 'أغلفة طعام قابلة لإعادة الاستخدام، بديل صديق للبيئة للأغلفة البلاستيكية',
    price: 16.99,
    originalPrice: 21.99,
    image: '/placeholder.svg',
    category: 'kitchen',
    categoryAr: 'مطبخ',
    discount: 23,
    rating: 4.6,
    inStock: true,
    featured: false,
    isNew: false,
    popular: true
  }
];
