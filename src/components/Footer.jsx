import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-navy text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-2xl font-bold">
              Portfolio<span className="text-highlight">.</span>
            </a>
          </div>
          
          <div className="text-lightSlate text-sm">
            <p className="flex items-center justify-center md:justify-end">
              Designed & Built with <Heart className="text-highlight mx-2" size={16} /> by John Doe
            </p>
            <p className="mt-1 text-center md:text-right">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;