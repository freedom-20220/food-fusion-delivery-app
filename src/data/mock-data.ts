
import { Restaurant, MenuItem } from "@/types";

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Alo Chicken",
    nameAr: "ألو تشيكن",
    logo: "/restaurants/alo-chicken.png",
    cuisine: "Fried Chicken",
    cuisineAr: "دجاج مقلي",
    rating: 5,
    deliveryTime: 45,
    deliveryFee: 0,
    minOrder: 18000,
    freeDelivery: true
  },
  {
    id: "2",
    name: "SliCe Pizza",
    nameAr: "سلايس بيتزا",
    logo: "/restaurants/slice-pizza.png",
    cuisine: "Pizza",
    cuisineAr: "بيتزا",
    rating: 5,
    deliveryTime: 40,
    deliveryFee: 0,
    minOrder: 15000
  },
  {
    id: "3",
    name: "Momo",
    nameAr: "مومو",
    logo: "/restaurants/momo.png",
    cuisine: "Fast Food & Burgers",
    cuisineAr: "وجبات سريعة و برغر",
    rating: 4,
    deliveryTime: 45,
    deliveryFee: 0,
    minOrder: 18000,
    offer: true
  },
  {
    id: "4",
    name: "Zedo Checkin",
    nameAr: "زيدو تشيكن",
    logo: "/restaurants/zedo.png",
    cuisine: "Fried Chicken",
    cuisineAr: "دجاج مقلي",
    rating: 4,
    deliveryTime: 45,
    deliveryFee: 0,
    minOrder: 18000
  },
  {
    id: "5",
    name: "River Burger",
    nameAr: "ريفر برغر",
    logo: "/restaurants/river-burger.png",
    cuisine: "Burgers",
    cuisineAr: "برغر",
    rating: 4,
    deliveryTime: 50,
    deliveryFee: 2000,
    minOrder: 15000
  }
];

export const menuItems: Record<string, MenuItem[]> = {
  "1": [
    {
      id: "101",
      name: "Spicy Chicken Strips",
      nameAr: "ستربس دجاج حار",
      description: "Crispy chicken strips with special spicy sauce",
      descriptionAr: "قطع دجاج مقرمشة مع صوص حار خاص",
      price: 8500,
      image: "/menu/chicken-strips.png",
      category: "Chicken",
      popular: true
    },
    {
      id: "102",
      name: "Family Bucket",
      nameAr: "باكت عائلي",
      description: "16 pieces of mixed chicken parts",
      descriptionAr: "16 قطعة من أجزاء الدجاج المشكلة",
      price: 25000,
      image: "/menu/family-bucket.png",
      category: "Chicken"
    },
    {
      id: "103",
      name: "Chicken Burger",
      nameAr: "برغر دجاج",
      description: "Crispy chicken patty with fresh vegetables",
      descriptionAr: "قطعة دجاج مقرمشة مع خضار طازجة",
      price: 7500,
      image: "/menu/chicken-burger.png",
      category: "Burgers",
      popular: true
    }
  ],
  "2": [
    {
      id: "201",
      name: "Margherita Pizza",
      nameAr: "بيتزا مارغريتا",
      description: "Classic pizza with tomato sauce and mozzarella",
      descriptionAr: "بيتزا كلاسيكية مع صوص طماطم وجبنة موزاريلا",
      price: 12000,
      image: "/menu/margherita.png",
      category: "Pizza",
      popular: true
    },
    {
      id: "202",
      name: "Pepperoni Pizza",
      nameAr: "بيتزا بيبروني",
      description: "Pizza with tomato sauce, mozzarella and pepperoni",
      descriptionAr: "بيتزا مع صوص طماطم وجبنة موزاريلا وبيبروني",
      price: 15000,
      image: "/menu/pepperoni.png",
      category: "Pizza",
      popular: true
    }
  ]
};
