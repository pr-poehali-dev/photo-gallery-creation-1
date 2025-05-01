
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Мои работы</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Добро пожаловать в мое портфолио. Здесь вы найдете коллекцию моих лучших фотографий и проектов.
            </p>
          </div>
        </section>
        
        <Gallery />
      </main>
      
      <footer className="bg-muted py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Фотопортфолио. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
