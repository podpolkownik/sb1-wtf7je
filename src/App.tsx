import React, { useState, useEffect } from 'react';
import { Shield, Users, Star, Trophy, ChevronDown, BookOpen, Target, Zap, Play, Check, Award, ArrowRight, ArrowUpRight, TrendingUp, LineChart, Wallet, BookMarked, BarChart3, BrainCircuit, Menu, X, Sparkles } from 'lucide-react';
import { Timer } from './components/Timer';
import { PriceCard } from './components/PriceCard';
import { MarketTicker } from './components/MarketTicker';
import { TradingChart } from './components/TradingChart';
import { CourseModule } from './components/CourseModule';
import { StatsCard } from './components/StatsCard';
import { Footer } from './components/Footer';
import { SignalsPreview } from './components/SignalsPreview';
import { MarketOverview } from './components/MarketOverview';
import { SuccessStories } from './components/SuccessStories';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0f1728] to-black text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group">
              <LineChart className="w-7 h-7 text-blue-400 group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">CoinSkill</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#modules" className="text-gray-300 hover:text-blue-400 transition-colors">Обучение</a>
              <a href="#signals" className="text-gray-300 hover:text-blue-400 transition-colors">Сигналы</a>
              <a href="#contacts" className="text-gray-300 hover:text-blue-400 transition-colors">Контакты</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-blue-400" />
              ) : (
                <Menu className="w-6 h-6 text-blue-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
              <div className="flex flex-col p-4 space-y-4">
                <a href="#modules" className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Обучение</a>
                <a href="#signals" className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Сигналы</a>
                <a href="#contacts" className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-28 lg:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-blue-600/20 to-transparent animate-pulse-slow" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-animate" />
          
          {/* Animated Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/40 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse-slower" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight fade-in-up">
              <span className="block bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Стань Профессиональным
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-white to-blue-600 bg-clip-text text-transparent animate-gradient-reverse mt-2">
                Криптотрейдером
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-200/90 mb-12 leading-relaxed max-w-3xl mx-auto fade-in-up stagger-1">
              Освойте технический анализ, управление рисками и психологию трейдинга 
              под руководством опытных наставников
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-up stagger-2">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                <button onClick={scrollToPricing} className="relative w-full sm:w-auto glass-effect bg-gradient-to-r from-blue-600/80 to-blue-400/80 hover:to-blue-500/80 px-12 py-6 rounded-xl transition-all flex items-center gap-3 justify-center group neon-glow-strong">
                  <span className="relative text-[1.3em] sm:text-[1.4em] font-semibold">
                    <span className="absolute inset-0 text-blue-300 blur-sm">Начать обучение</span>
                    <span className="relative text-white">Начать обучение</span>
                  </span>
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-bounce-slow" />
                  <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-400 animate-bounce-slower" />
                </button>
              </div>
              <Timer />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto fade-in-up stagger-3">
              <StatsCard icon={Shield} label="2000+ выпускников" />
              <StatsCard icon={Users} label="6+ лет опыта" />
              <StatsCard icon={Star} label="4.9/5 рейтинг" isHighlighted />
              <StatsCard icon={Trophy} label="Лучшая школа 2023" />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Инвестируйте в Свое Будущее
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Получите доступ к полному курсу и начните свой путь к финансовой независимости
            </p>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <PriceCard
              title="PRO курс"
              price="49,900"
              features={[
                "Все материалы курса",
                "Личный наставник",
                "Закрытый канал сигналов",
                "Доступ к PRO сообществу",
                "Разбор ваших сделок",
                "Пожизненный доступ к обновлениям"
              ]}
              isPopular={true}
            />
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Программа обучения
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <CourseModule 
              icon={BookMarked}
              title="Технический анализ"
              duration="2 недели"
              topics={[
                "Продвинутые паттерны",
                "Индикаторы и осцилляторы",
                "Уровни поддержки и сопротивления",
                "Волновой анализ"
              ]}
            />
            <CourseModule 
              icon={LineChart}
              title="Торговые стратегии"
              duration="2 недели"
              topics={[
                "Скальпинг",
                "Внутридневная торговля",
                "Свинг-трейдинг",
                "Арбитраж"
              ]}
            />
            <CourseModule 
              icon={BarChart3}
              title="Риск-менеджмент"
              duration="1 неделя"
              topics={[
                "Управление капиталом",
                "Расчет позиций",
                "Стоп-лоссы и тейк-профиты",
                "Диверсификация"
              ]}
            />
            <CourseModule 
              icon={BrainCircuit}
              title="Психология трейдинга"
              duration="1 неделя"
              topics={[
                "Управление эмоциями",
                "Торговый план",
                "Дневник трейдера",
                "Психология рынка"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section (Moved here) */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-animate" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-center">Получайте новости и обновления</h3>
                <p className="text-gray-300 mb-6 text-center">Подпишитесь на нашу рассылку и получите бесплатный урок</p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors justify-center">
                    Подписаться
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Signals Section */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SignalsPreview />
        </div>
      </div>

      {/* Trading Terminal */}
      <div className="py-12 md:py-16">
        <TradingChart />
      </div>

      {/* Market Overview */}
      <div className="py-8 md:py-12">
        <MarketOverview />
      </div>

      {/* Success Stories */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
        <SuccessStories />
      </div>

      <Footer />
    </div>
  );
};

export default App;