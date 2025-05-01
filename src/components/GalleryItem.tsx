
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  category?: string;
}

const GalleryItem = ({ imageUrl, title, category }: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover-scale transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        <div className={`absolute inset-0 bg-foreground/60 flex flex-col justify-end p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          {category && <p className="text-white/80 text-sm">{category}</p>}
        </div>
      </div>
    </Card>
  );
};

export default GalleryItem;
