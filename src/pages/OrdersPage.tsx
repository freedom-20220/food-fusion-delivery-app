
import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { mockOrders } from '@/data/mock-orders';
import { Order, OrderStatus } from '@/types';
import { Package, Clock, MapPin } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

const OrdersPage = () => {
  const [orders] = useState<Order[]>(mockOrders);
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  const getStatusColor = (status: OrderStatus) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'preparing': return 'bg-purple-100 text-purple-800';
      case 'out-for-delivery': return 'bg-orange-100 text-orange-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusText = (status: OrderStatus) => {
    switch(status) {
      case 'pending': return 'قيد الانتظار';
      case 'confirmed': return 'تم التأكيد';
      case 'preparing': return 'قيد التجهيز';
      case 'out-for-delivery': return 'قيد التوصيل';
      case 'delivered': return 'تم التوصيل';
      case 'cancelled': return 'ملغي';
      default: return status;
    }
  };

  return (
    <div className="pb-16">
      <Header title="طلباتي" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{order.restaurantName}</p>
                      <p className="text-sm text-gray-500">رقم الطلب: {order.id}</p>
                    </div>
                    <Badge className={`${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">{formatDate(order.createdAt)}</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">{order.deliveryAddress}</span>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>المنتج</TableHead>
                        <TableHead className="text-right">الكمية</TableHead>
                        <TableHead className="text-right">السعر</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {order.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.menuItem.name}</TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell className="text-right">
                            {new Intl.NumberFormat('ar-SA').format(item.menuItem.price * item.quantity)}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={2} className="font-semibold">المجموع</TableCell>
                        <TableCell className="text-right font-semibold">
                          {new Intl.NumberFormat('ar-SA').format(order.total)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
              <Package className="w-full h-full" />
            </div>
            <h2 className="text-xl font-semibold text-brand-text-primary mb-2">لا توجد طلبات</h2>
            <p className="text-brand-text-secondary mb-6">لم تقم بإجراء أي طلبات بعد</p>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default OrdersPage;
