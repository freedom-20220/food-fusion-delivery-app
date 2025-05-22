
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { mockPaymentMethods } from '@/data/mock-payment-methods';
import { PaymentMethod } from '@/types';
import { CreditCard, PlusCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const PaymentMethodsPage = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(mockPaymentMethods);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const setDefaultPaymentMethod = (id: string) => {
    const updatedMethods = paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id,
    }));
    setPaymentMethods(updatedMethods);
    
    toast({
      title: "تم تحديث طريقة الدفع الافتراضية",
      duration: 2000,
    });
  };
  
  const deletePaymentMethod = (id: string) => {
    const updatedMethods = paymentMethods.filter(method => method.id !== id);
    setPaymentMethods(updatedMethods);
    
    toast({
      title: "تم حذف طريقة الدفع",
      duration: 2000,
    });
  };
  
  const addNewCard = () => {
    navigate('/add-card');
  };

  return (
    <div className="pb-16">
      <Header title="طرق الدفع" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        <Button
          className="w-full mb-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
          onClick={addNewCard}
        >
          <PlusCircle className="h-5 w-5" />
          <span>إضافة بطاقة جديدة</span>
        </Button>

        {paymentMethods.length > 0 ? (
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">{method.cardNumber}</p>
                      <p className="text-sm text-gray-500">{method.cardHolder} • تنتهي في {method.expiryDate}</p>
                    </div>
                  </div>
                  
                  {method.isDefault && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <Check className="h-3 w-3 mr-1" />
                      افتراضي
                    </span>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t flex justify-between">
                  {!method.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setDefaultPaymentMethod(method.id)}
                    >
                      تعيين كافتراضي
                    </Button>
                  )}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500"
                    onClick={() => deletePaymentMethod(method.id)}
                  >
                    حذف
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
              <CreditCard className="w-full h-full" />
            </div>
            <h2 className="text-xl font-semibold text-brand-text-primary mb-2">لا توجد طرق دفع</h2>
            <p className="text-brand-text-secondary mb-6">لم تقم بإضافة أي طرق دفع بعد</p>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default PaymentMethodsPage;
