
import GalleryItem from "./GalleryItem";

// Временные данные для галереи
const galleryData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1581337642346-53ad4791ac99",
    title: "Пейзаж в горах",
    category: "Природа"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1552083375-1447ce886485",
    title: "Городская архитектура",
    category: "Город"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3",
    title: "Портрет девушки",
    category: "Портреты"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    title: "Модная фотосессия",
    category: "Мода"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1508896694512-1eade558679c",
    title: "Натюрморт с фруктами",
    category: "Натюрморт"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    title: "Животные",
    category: "Природа"
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryData.map((item) => (
          <GalleryItem 
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
