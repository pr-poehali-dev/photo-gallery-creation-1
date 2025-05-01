
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-background py-4 border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Camera" size={24} className="text-accent" />
            <span>Фотопортфолио</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-accent transition-colors">
            Галерея
          </Link>
          <Link to="/about" className="text-foreground hover:text-accent transition-colors">
            Обо мне
          </Link>
          <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
            Контакты
          </Link>
        </nav>
        
        <button className="md:hidden text-foreground">
          <Icon name="Menu" size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
