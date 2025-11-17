import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const motorcycles = [
  {
    id: 1,
    name: 'ИЖ-49',
    year: '1951-1958',
    engine: '346 см³',
    power: '13 л.с.',
    image: 'https://cdn.poehali.dev/projects/bfc0d400-fc67-4b2f-83bc-bbbf99a8c519/files/995427a7-54ad-42bd-a3df-f158691146d8.jpg',
    description: 'Первый серийный мотоцикл ИЖ. Легендарная модель, ставшая народным транспортом.'
  },
  {
    id: 2,
    name: 'Урал М-72',
    year: '1941-1960',
    engine: '746 см³',
    power: '22 л.с.',
    image: 'https://cdn.poehali.dev/projects/bfc0d400-fc67-4b2f-83bc-bbbf99a8c519/files/ea27a1a1-d7ec-4c84-be92-db7ee73b29c2.jpg',
    description: 'Тяжёлый мотоцикл с коляской. Надёжный работяга советских дорог.'
  },
  {
    id: 3,
    name: 'Днепр К-750',
    year: '1960-1979',
    engine: '649 см³',
    power: '32 л.с.',
    image: 'https://cdn.poehali.dev/projects/bfc0d400-fc67-4b2f-83bc-bbbf99a8c519/files/62077dbc-6d54-4263-ae21-a8884c8c4cbf.jpg',
    description: 'Мощный мотоцикл киевского завода. Символ свободы и надёжности.'
  }
];

const timeline = [
  { year: '1930-е', event: 'Начало производства мотоциклов в СССР', icon: 'Factory' },
  { year: '1941', event: 'Запуск легендарного М-72 для фронта', icon: 'Shield' },
  { year: '1950-е', event: 'Золотая эра: ИЖ, Днепр, Урал', icon: 'Star' },
  { year: '1970-е', event: 'Пик производства - миллионы мотоциклов', icon: 'TrendingUp' },
  { year: '1991', event: 'Трансформация после распада СССР', icon: 'RefreshCw' }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за сообщение! Мы свяжемся с вами.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-sidebar text-sidebar-foreground shadow-lg border-b-4 border-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Bike" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold tracking-wider">МОТОЦИКЛЫ СССР</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'history', label: 'История', icon: 'Clock' },
                { id: 'catalog', label: 'Каталог', icon: 'BookOpen' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-all hover:bg-sidebar-accent ${
                    activeSection === item.id ? 'bg-sidebar-accent text-primary' : ''
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4 text-lg px-4 py-2 bg-primary text-primary-foreground">
              1930-1991
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-tight animate-fade-in">
              ЛЕГЕНДЫ СОВЕТСКОГО МОТОПРОМА
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              История машин, которые покорили миллионы километров дорог великой страны
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => scrollToSection('catalog')}
              >
                <Icon name="Bike" className="mr-2" size={20} />
                Каталог моделей
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                onClick={() => scrollToSection('history')}
              >
                <Icon name="BookOpen" className="mr-2" size={20} />
                История
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="history" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">История</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Путь советского мотопрома</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                От первых заводов до мирового признания - история развития мотоциклетной промышленности СССР
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/30"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-20 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Icon name={item.icon as any} size={28} className="text-primary-foreground" />
                    </div>
                    <Card className="border-2 border-border hover:border-primary transition-all hover:shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-2xl text-primary">{item.year}</CardTitle>
                        <CardDescription className="text-lg text-foreground">{item.event}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Card className="mt-16 bg-card border-2 border-primary/50">
              <CardHeader>
                <CardTitle className="text-3xl">Эпоха великих достижений</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p>
                  Советский мотопром начался в 1930-х годах с создания первых заводов в Москве, Ижевске и Киеве. 
                  Уже к 1940-м годам СССР производил надёжные мотоциклы для армии и народного хозяйства.
                </p>
                <p>
                  Золотой век пришёлся на 1950-70-е годы, когда заводы ИЖ, Урал и Днепр выпускали сотни тысяч 
                  единиц техники ежегодно. Советские мотоциклы экспортировались в десятки стран мира.
                </p>
                <p className="font-semibold text-primary">
                  Эти машины стали символом свободы, надёжности и технического мастерства советской инженерной школы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Каталог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Легендарные модели</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Знаковые мотоциклы, которые написали историю советского мотопрома
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {motorcycles.map((moto, index) => (
              <Card 
                key={moto.id} 
                className="overflow-hidden border-2 border-border hover:border-primary transition-all hover:shadow-2xl hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={moto.image} 
                    alt={moto.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl">{moto.name}</CardTitle>
                    <Badge variant="outline" className="border-primary text-primary">{moto.year}</Badge>
                  </div>
                  <CardDescription className="text-base">{moto.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Gauge" size={18} className="text-primary" />
                      <span className="text-sm font-medium">{moto.engine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={18} className="text-primary" />
                      <span className="text-sm font-medium">{moto.power}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Есть вопросы о советских мотоциклах? Напишите нам!
              </p>
            </div>

            <Card className="border-2 border-border">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Введите ваше имя"
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите, что вас интересует..."
                      required
                      rows={5}
                      className="border-2 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center border-2 border-border">
                <CardContent className="pt-6">
                  <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">info@motosussr.ru</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-border">
                <CardContent className="pt-6">
                  <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-semibold">Телефон</p>
                  <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-border">
                <CardContent className="pt-6">
                  <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-semibold">Адрес</p>
                  <p className="text-sm text-muted-foreground">Москва, Россия</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-sidebar text-sidebar-foreground py-8 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Bike" size={28} className="text-primary" />
              <p className="font-semibold">МОТОЦИКЛЫ СССР © 2024</p>
            </div>
            <p className="text-sm text-sidebar-foreground/80">
              История легендарных машин великой страны
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
