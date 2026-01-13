import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      title: "Ручной инструмент",
      description: "Профессиональные решения для точной работы",
      icon: "Wrench",
      link: "https://kgs-ural.ru/catalog/ruchnoj-instrument/"
    },
    {
      title: "Электроинструмент",
      description: "Мощное оборудование для эффективных задач",
      icon: "Zap",
      link: "https://kgs-ural.ru/catalog/elektroinstrument/"
    },
    {
      title: "Измерительное оборудование",
      description: "Точность в каждом измерении",
      icon: "Ruler",
      link: "https://kgs-ural.ru/catalog/izmeritelnoe-oborudovanie/"
    },
    {
      title: "Пневмоинструмент",
      description: "Надежность и производительность",
      icon: "Wind",
      link: "https://kgs-ural.ru/catalog/pnevmoinstrument/"
    },
    {
      title: "Оснастка",
      description: "Комплектующие для всех видов работ",
      icon: "Settings",
      link: "https://kgs-ural.ru/catalog/osnastka/"
    },
    {
      title: "Расходные материалы",
      description: "Всё необходимое для непрерывной работы",
      icon: "Package",
      link: "https://kgs-ural.ru/catalog/rashodnye-materialy/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Icon name="Briefcase" size={40} className="text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Специальное оборудование и инструменты
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Расширяем возможности вашего производства с профессиональным оборудованием от КГС-Урал
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={category.icon} size={24} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <a 
                    href={category.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Перейти в каталог
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border/50 rounded-lg p-8 text-center shadow-sm animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Готовы оснастить ваше производство?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Получите консультацию специалиста и подберите оптимальное решение для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              asChild
            >
              <a href="https://kgs-ural.ru/catalog/" target="_blank" rel="noopener noreferrer">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Перейти в полный каталог
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto"
              asChild
            >
              <a href="https://kgs-ural.ru/kontakty/" target="_blank" rel="noopener noreferrer">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </a>
            </Button>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong className="text-foreground">КГС-Урал</strong> — ваш надежный партнер в поставках инструмента
          </p>
          <p>
            <a href="https://kgs-ural.ru" className="text-primary hover:text-primary/80 transition-colors">
              kgs-ural.ru
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
