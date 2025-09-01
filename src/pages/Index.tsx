import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-2xl text-culinary-gray">
            CulinaryAcademy
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
            <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-culinary-orange hover:bg-culinary-orange/90 text-white">
            Записаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-culinary-cream to-white">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-culinary-gray mb-6">
            Мастерство кулинарии
            <span className="block text-culinary-orange">от лучших шеф-поваров</span>
          </h1>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Изучайте кулинарное искусство с видеоуроками, пошаговыми рецептами 
            и демонстрацией профессиональных техник от ведущих поваров страны
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-culinary-orange hover:bg-culinary-orange/90 text-white px-8 py-3 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть курсы
            </Button>
            <Button size="lg" variant="outline" className="border-culinary-gray text-culinary-gray hover:bg-culinary-gray hover:text-white px-8 py-3 text-lg">
              Бесплатный урок
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-culinary-orange mb-2">50+</div>
              <div className="text-sm text-foreground">Видеоуроков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-culinary-orange mb-2">15+</div>
              <div className="text-sm text-foreground">Шеф-поваров</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-culinary-orange mb-2">1000+</div>
              <div className="text-sm text-foreground">Студентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-culinary-gray mb-4">Популярные курсы</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              От базовых техник до продвинутых кулинарных секретов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-culinary-yellow/20 to-culinary-orange/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-culinary-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-culinary-orange text-white">12 уроков</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-display text-xl">Основы французской кухни</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Изучите классические техники и рецепты французской кулинарии
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-culinary-orange">₽4,990</span>
                  <Button className="bg-culinary-orange hover:bg-culinary-orange/90 text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-culinary-orange/20 to-culinary-yellow/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-culinary-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-culinary-orange text-white">8 уроков</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-display text-xl">Итальянская паста</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Секреты приготовления домашней пасты и классических соусов
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-culinary-orange">₽3,490</span>
                  <Button className="bg-culinary-orange hover:bg-culinary-orange/90 text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-culinary-yellow/20 to-culinary-cream">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-culinary-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-culinary-orange text-white">15 уроков</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-display text-xl">Кондитерское мастерство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  От простых десертов до сложных тортов и пирожных
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-culinary-orange">₽5,990</span>
                  <Button className="bg-culinary-orange hover:bg-culinary-orange/90 text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 px-4 bg-gradient-to-br from-culinary-cream/50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-culinary-gray mb-4">Наши преподаватели</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Профессиональные шеф-повара с многолетним опытом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-culinary-orange to-culinary-yellow rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="ChefHat" size={48} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-culinary-gray mb-2">Анна Петрова</h3>
                <p className="text-culinary-orange font-semibold mb-4">Шеф-повар французской кухни</p>
                <p className="text-foreground">
                  15 лет опыта в ресторанах Мишлен. Обучалась в Париже у лучших мастеров.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-culinary-yellow to-culinary-orange rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="ChefHat" size={48} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-culinary-gray mb-2">Марко Росси</h3>
                <p className="text-culinary-orange font-semibold mb-4">Мастер итальянской кухни</p>
                <p className="text-foreground">
                  Родом из Италии, 20 лет готовит аутентичную пасту и пиццу.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-culinary-orange to-culinary-yellow rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="ChefHat" size={48} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-culinary-gray mb-2">Елена Смирнова</h3>
                <p className="text-culinary-orange font-semibold mb-4">Кондитер-виртуоз</p>
                <p className="text-foreground">
                  Чемпион мира по кондитерскому искусству. Создает настоящие шедевры.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-culinary-gray mb-4">Отзывы студентов</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Что говорят наши выпускники о курсах
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-culinary-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">ВМ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-culinary-gray">Вера Михайлова</h4>
                    <div className="flex text-culinary-yellow">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-foreground">
                  "Превосходный курс французской кухни! Теперь готовлю дома блюда ресторанного уровня. 
                  Видеоуроки очень подробные и понятные."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-culinary-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">ДС</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-culinary-gray">Дмитрий Соколов</h4>
                    <div className="flex text-culinary-yellow">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-foreground">
                  "Курс по итальянской пасте изменил мою жизнь! Теперь каждый ужин — это праздник. 
                  Марко объясняет все секреты мастерства."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-culinary-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">ОК</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-culinary-gray">Ольга Кузнецова</h4>
                    <div className="flex text-culinary-yellow">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-foreground">
                  "Кондитерский курс — просто волшебство! Елена научила делать торты, о которых 
                  я раньше только мечтала. Рекомендую всем!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-culinary-gray to-culinary-gray/90 text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к нашей кулинарной семье и откройте для себя мир профессиональной кулинарии
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-culinary-orange hover:bg-culinary-orange/90 text-white px-8 py-3 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-culinary-gray px-8 py-3 text-lg">
              Задать вопрос
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="mb-4 text-culinary-orange" />
              <h3 className="font-display text-xl font-bold mb-2">Телефон</h3>
              <p className="opacity-90">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="mb-4 text-culinary-orange" />
              <h3 className="font-display text-xl font-bold mb-2">Email</h3>
              <p className="opacity-90">info@culinaryacademy.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="mb-4 text-culinary-orange" />
              <h3 className="font-display text-xl font-bold mb-2">Адрес</h3>
              <p className="opacity-90">Москва, ул. Поварская, 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-culinary-gray text-white text-center">
        <div className="container mx-auto">
          <div className="font-display font-bold text-2xl mb-4">CulinaryAcademy</div>
          <p className="opacity-75">© 2024 CulinaryAcademy. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}