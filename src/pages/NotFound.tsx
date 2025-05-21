
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-orange mb-4">404</h1>
        <p className="text-xl text-brand-text-primary mb-6">عفواً، الصفحة غير موجودة</p>
        <p className="text-brand-text-secondary mb-8">الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.</p>
        <Link to="/">
          <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white">
            العودة إلى الصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
