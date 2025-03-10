import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-navy mb-4">404</h1>
        <p className="text-slate text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button asChild className="bg-highlight text-navy hover:bg-highlight/80">
          <a href="/" className="flex items-center">
            <Home className="mr-2" size={18} />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;