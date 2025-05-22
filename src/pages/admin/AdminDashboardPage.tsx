
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Users, ShoppingCart, TrendingUp, Settings, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboardPage = () => {
  // Sample statistics
  const stats = {
    orders: 128,
    products: 245,
    users: 1254,
    revenue: 15420,
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-green-600 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">لوحة التحكم</h1>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-green-100">مرحباً بك في لوحة التحكم</p>
      </div>
      
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">الطلبات</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <ShoppingCart className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-2xl font-bold">{stats.orders}</span>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">المنتجات</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Package className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-2xl font-bold">{stats.products}</span>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">المستخدمين</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Users className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-2xl font-bold">{stats.users}</span>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">الإيرادات</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-2xl font-bold">${stats.revenue}</span>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-xl font-bold mb-4">الإدارة</h2>
        
        <div className="grid grid-cols-1 gap-4">
          <Link to="/admin/products" className="block">
            <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Package className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium">إدارة المنتجات</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/admin/orders" className="block">
            <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <ShoppingCart className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-medium">إدارة الطلبات</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/admin/users" className="block">
            <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium">إدارة المستخدمين</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        <div className="mt-6">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <PlusCircle className="mr-2 h-5 w-5" />
            إضافة منتج جديد
          </Button>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-between">
          <Link to="/" className="text-gray-600">
            العودة إلى الواجهة الرئيسية
          </Link>
          <span className="text-gray-600">لوحة التحكم v1.0</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
