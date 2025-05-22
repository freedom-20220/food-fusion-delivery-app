
import React from 'react';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import AddCardForm from '@/components/AddCardForm';

const AddCardPage = () => {
  return (
    <div className="pb-16">
      <Header title="إضافة بطاقة جديدة" showBackButton={true} />
      
      <main className="container mx-auto px-4 py-6">
        <AddCardForm />
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default AddCardPage;
