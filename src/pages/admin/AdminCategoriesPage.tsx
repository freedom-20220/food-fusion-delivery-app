
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Plus, Edit, Trash2, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';

interface Category {
  id: string;
  name: string;
  nameAr: string;
  subcategories: string[];
}

const AdminCategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([
    { 
      id: 'kitchen', 
      name: 'Kitchen', 
      nameAr: 'مطبخ',
      subcategories: ['أدوات المطبخ', 'أواني الطبخ', 'أدوات التقطيع', 'أجهزة صغيرة'] 
    },
    { 
      id: 'bathroom', 
      name: 'Bathroom', 
      nameAr: 'حمام',
      subcategories: ['مناشف', 'أدوات استحمام', 'إكسسوارات الحمام', 'منظفات'] 
    },
    { 
      id: 'living', 
      name: 'Living Room', 
      nameAr: 'غرفة معيشة',
      subcategories: ['ديكورات', 'وسائد', 'سجاد', 'إضاءة'] 
    },
    { 
      id: 'eco', 
      name: 'Eco-Friendly', 
      nameAr: 'صديق للبيئة',
      subcategories: ['منتجات قابلة للتحلل', 'إعادة تدوير', 'مواد عضوية', 'توفير طاقة'] 
    },
  ]);
  
  const [newCategory, setNewCategory] = useState({
    name: '',
    nameAr: '',
    subcategories: [''],
  });
  
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const { toast } = useToast();
  
  const addSubcategoryField = () => {
    if (editingCategory) {
      setEditingCategory({
        ...editingCategory,
        subcategories: [...editingCategory.subcategories, '']
      });
    } else {
      setNewCategory({
        ...newCategory,
        subcategories: [...newCategory.subcategories, '']
      });
    }
  };
  
  const handleSubcategoryChange = (index: number, value: string) => {
    if (editingCategory) {
      const updatedSubcategories = [...editingCategory.subcategories];
      updatedSubcategories[index] = value;
      setEditingCategory({
        ...editingCategory,
        subcategories: updatedSubcategories
      });
    } else {
      const updatedSubcategories = [...newCategory.subcategories];
      updatedSubcategories[index] = value;
      setNewCategory({
        ...newCategory,
        subcategories: updatedSubcategories
      });
    }
  };
  
  const removeSubcategory = (index: number) => {
    if (editingCategory) {
      const updatedSubcategories = [...editingCategory.subcategories];
      updatedSubcategories.splice(index, 1);
      setEditingCategory({
        ...editingCategory,
        subcategories: updatedSubcategories
      });
    } else {
      const updatedSubcategories = [...newCategory.subcategories];
      updatedSubcategories.splice(index, 1);
      setNewCategory({
        ...newCategory,
        subcategories: updatedSubcategories
      });
    }
  };
  
  const handleAddCategory = () => {
    // Filter out empty subcategories
    const filteredSubcategories = newCategory.subcategories.filter(sub => sub.trim() !== '');
    
    // Generate a simple ID from the name
    const id = newCategory.name.toLowerCase().replace(/\s+/g, '-');
    
    setCategories([...categories, {
      id,
      name: newCategory.name,
      nameAr: newCategory.nameAr,
      subcategories: filteredSubcategories
    }]);
    
    // Reset form
    setNewCategory({
      name: '',
      nameAr: '',
      subcategories: [''],
    });
    
    toast({
      title: "تم إضافة الفئة",
      description: `تم إضافة فئة ${newCategory.nameAr} بنجاح`,
      duration: 2000,
    });
  };
  
  const handleUpdateCategory = () => {
    if (!editingCategory) return;
    
    // Filter out empty subcategories
    const filteredSubcategories = editingCategory.subcategories.filter(sub => sub.trim() !== '');
    
    const updatedCategory = {
      ...editingCategory,
      subcategories: filteredSubcategories
    };
    
    setCategories(categories.map(cat => 
      cat.id === updatedCategory.id ? updatedCategory : cat
    ));
    
    setEditingCategory(null);
    
    toast({
      title: "تم تحديث الفئة",
      description: `تم تحديث فئة ${updatedCategory.nameAr} بنجاح`,
      duration: 2000,
    });
  };
  
  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id));
    
    toast({
      title: "تم حذف الفئة",
      description: "تم حذف الفئة بنجاح",
      duration: 2000,
    });
  };
  
  const startEditing = (category: Category) => {
    setEditingCategory({...category});
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center">
          <Link to="/admin" className="mr-3">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">إدارة الفئات</h1>
        </div>
      </div>
      
      <div className="px-6 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">الفئات ({categories.length})</h2>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-5 w-5 mr-1" />
                إضافة فئة
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>إضافة فئة جديدة</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">اسم الفئة (English)</label>
                    <Input 
                      value={newCategory.name} 
                      onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                      placeholder="Category name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">اسم الفئة (العربية)</label>
                    <Input 
                      value={newCategory.nameAr} 
                      onChange={(e) => setNewCategory({...newCategory, nameAr: e.target.value})}
                      placeholder="اسم الفئة"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">الفئات الفرعية</label>
                  {newCategory.subcategories.map((subcategory, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <Input 
                        value={subcategory}
                        onChange={(e) => handleSubcategoryChange(index, e.target.value)}
                        placeholder="الفئة الفرعية"
                      />
                      {newCategory.subcategories.length > 1 && (
                        <Button 
                          type="button" 
                          variant="destructive" 
                          size="icon"
                          onClick={() => removeSubcategory(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={addSubcategoryField}
                    className="mt-2"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    إضافة فئة فرعية
                  </Button>
                </div>
              </div>
              
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">إلغاء</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button 
                    onClick={handleAddCategory} 
                    className="bg-green-600 hover:bg-green-700"
                    disabled={!newCategory.name || !newCategory.nameAr}
                  >
                    إضافة
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>الفئة</TableHead>
                <TableHead>الفئات الفرعية</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={category.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{category.nameAr}</p>
                      <p className="text-sm text-gray-500">{category.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.map((sub, subIndex) => (
                        <span 
                          key={subIndex} 
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuGroup>
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => {
                                e.preventDefault();
                                startEditing(category);
                              }}>
                                <Edit className="h-4 w-4 mr-2" />
                                <span>تعديل</span>
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>تعديل الفئة</DialogTitle>
                              </DialogHeader>
                              
                              {editingCategory && (
                                <div className="space-y-4 py-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium">اسم الفئة (English)</label>
                                      <Input 
                                        value={editingCategory.name} 
                                        onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
                                      />
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium">اسم الفئة (العربية)</label>
                                      <Input 
                                        value={editingCategory.nameAr} 
                                        onChange={(e) => setEditingCategory({...editingCategory, nameAr: e.target.value})}
                                      />
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <label className="text-sm font-medium">الفئات الفرعية</label>
                                    {editingCategory.subcategories.map((subcategory, index) => (
                                      <div key={index} className="flex gap-2 mt-2">
                                        <Input 
                                          value={subcategory}
                                          onChange={(e) => handleSubcategoryChange(index, e.target.value)}
                                        />
                                        {editingCategory.subcategories.length > 1 && (
                                          <Button 
                                            type="button" 
                                            variant="destructive" 
                                            size="icon"
                                            onClick={() => removeSubcategory(index)}
                                          >
                                            <Trash2 className="h-4 w-4" />
                                          </Button>
                                        )}
                                      </div>
                                    ))}
                                    
                                    <Button 
                                      type="button" 
                                      variant="outline" 
                                      size="sm"
                                      onClick={addSubcategoryField}
                                      className="mt-2"
                                    >
                                      <Plus className="h-4 w-4 mr-1" />
                                      إضافة فئة فرعية
                                    </Button>
                                  </div>
                                </div>
                              )}
                              
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">إلغاء</Button>
                                </DialogClose>
                                <DialogClose asChild>
                                  <Button 
                                    onClick={handleUpdateCategory} 
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    حفظ التغييرات
                                  </Button>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          
                          <DropdownMenuItem 
                            className="text-red-600"
                            onSelect={() => handleDeleteCategory(category.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            <span>حذف</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminCategoriesPage;
