
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  cardNumber: z.string().min(16, 'Card number must be 16 digits').max(19),
  cardHolder: z.string().min(3, 'Please enter the cardholder name'),
  expiryMonth: z.string().min(1, 'Required').max(2),
  expiryYear: z.string().min(2, 'Required').max(2),
  cvv: z.string().min(3, 'CVV must be 3 digits').max(4),
});

const AddCardForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: '',
      cardHolder: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, we would send this data to the server
    console.log('Form submitted:', values);
    
    // Show success toast
    toast({
      title: "تمت إضافة البطاقة بنجاح",
      description: "تمت إضافة بطاقة الدفع الجديدة إلى حسابك",
      duration: 3000,
    });
    
    // Navigate back to payment methods
    navigate('/payment-methods');
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم البطاقة</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="0000 0000 0000 0000" 
                    type="text" 
                    inputMode="numeric" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="cardHolder"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اسم صاحب البطاقة</FormLabel>
                <FormControl>
                  <Input placeholder="الاسم كما هو مكتوب على البطاقة" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <FormLabel>تاريخ الانتهاء</FormLabel>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="expiryMonth"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="MM" maxLength={2} type="text" inputMode="numeric" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <span className="text-xl self-center">/</span>
                <FormField
                  control={form.control}
                  name="expiryYear"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="YY" maxLength={2} type="text" inputMode="numeric" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input placeholder="123" maxLength={4} type="password" inputMode="numeric" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="pt-4">
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              إضافة البطاقة
            </Button>
            
            <Button
              type="button"
              variant="outline"
              className="w-full mt-3"
              onClick={() => navigate('/payment-methods')}
            >
              إلغاء
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddCardForm;
