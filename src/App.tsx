
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { useEffect, useState } from "react";

import Index from "./pages/Index";
import RestaurantDetail from "./pages/RestaurantDetail";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import OrdersPage from "./pages/OrdersPage";
import PaymentMethodsPage from "./pages/PaymentMethodsPage";
import NotificationsSettingsPage from "./pages/NotificationsSettingsPage";
import SettingsPage from "./pages/SettingsPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import LoginPage from "./pages/LoginPage";
import AddCardPage from "./pages/AddCardPage";
import EditProfilePage from "./pages/EditProfilePage";
import SecurityPrivacyPage from "./pages/SecurityPrivacyPage";
import LanguageRegionPage from "./pages/LanguageRegionPage";
import AdminAddProductPage from "./pages/admin/AdminAddProductPage";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";

// Auth guard component
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Admin guard component
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const queryClient = new QueryClient();

const App = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  
  useEffect(() => {
    // Apply dark mode on initial load
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Apply RTL direction if language is Arabic
    const language = localStorage.getItem('appLanguage') || 'ar';
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [darkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FavoritesProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                
                {/* Protected Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/restaurant/:id" element={<RestaurantDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/search" element={<SearchPage />} />
                
                {/* User Account Routes */}
                <Route path="/profile" element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                } />
                <Route path="/favorites" element={
                  <PrivateRoute>
                    <FavoritesPage />
                  </PrivateRoute>
                } />
                <Route path="/orders" element={
                  <PrivateRoute>
                    <OrdersPage />
                  </PrivateRoute>
                } />
                <Route path="/payment-methods" element={
                  <PrivateRoute>
                    <PaymentMethodsPage />
                  </PrivateRoute>
                } />
                <Route path="/add-card" element={
                  <PrivateRoute>
                    <AddCardPage />
                  </PrivateRoute>
                } />
                <Route path="/notifications-settings" element={
                  <PrivateRoute>
                    <NotificationsSettingsPage />
                  </PrivateRoute>
                } />
                <Route path="/settings" element={
                  <PrivateRoute>
                    <SettingsPage />
                  </PrivateRoute>
                } />
                <Route path="/edit-profile" element={
                  <PrivateRoute>
                    <EditProfilePage />
                  </PrivateRoute>
                } />
                <Route path="/security-privacy" element={
                  <PrivateRoute>
                    <SecurityPrivacyPage />
                  </PrivateRoute>
                } />
                <Route path="/language-region" element={
                  <PrivateRoute>
                    <LanguageRegionPage />
                  </PrivateRoute>
                } />
                
                {/* Admin Routes */}
                <Route path="/admin" element={
                  <AdminRoute>
                    <AdminDashboardPage />
                  </AdminRoute>
                } />
                <Route path="/admin/products" element={
                  <AdminRoute>
                    <AdminProductsPage />
                  </AdminRoute>
                } />
                <Route path="/admin/add-product" element={
                  <AdminRoute>
                    <AdminAddProductPage />
                  </AdminRoute>
                } />
                <Route path="/admin/categories" element={
                  <AdminRoute>
                    <AdminCategoriesPage />
                  </AdminRoute>
                } />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </FavoritesProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
