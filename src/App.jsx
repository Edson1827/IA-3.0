import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Menu,
  X,
  Calculator,
  DollarSign,
  Gauge,
  Award,
  Clock,
  Smartphone,
  Sun,
  Moon
} from 'lucide-react'
import './App.css'

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Scala <span className="text-accent">Uai</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('calculadora')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Calculadora
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Preços
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            <Button 
              className="btn-accent"
              onClick={() => scrollToSection('precos')}
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-yellow-500" />
              ) : (
                <Moon className="h-4 w-4 text-gray-600" />
              )}
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('calculadora')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Calculadora
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Preços
              </button>
              <Button 
                className="btn-accent w-full"
                onClick={() => scrollToSection('precos')}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente Hero Section
const HeroSection = () => {
  return (
    <section className="gradient-hero text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              ✨ Para PMEs que faturam R$ 20k - R$ 5M/mês
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Escale Seu Negócio com{' '}
              <span className="text-accent">Tráfego Pago</span>{' '}
              Inteligente
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Automação de 95%, transparência total e resultados garantidos em 30 dias. 
              Especialistas em PMEs brasileiras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-accent text-lg px-8 py-4"
                onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Meu ROI
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Soluções
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Resultados Reais</h3>
                <p className="text-blue-100">Últimos 30 dias</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">+340%</div>
                  <div className="text-sm text-blue-100">ROAS Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">R$ 2.8M</div>
                  <div className="text-sm text-blue-100">Faturamento Gerado</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-blue-100">PMEs Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-blue-100">Automação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente ROI Calculator
const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState('')
  const [adSpend, setAdSpend] = useState('')
  const [results, setResults] = useState(null)

  const calculateROI = () => {
    const revenue = parseFloat(monthlyRevenue) || 0
    const spend = parseFloat(adSpend) || 0

    if (revenue > 0 && spend > 0) {
      const currentROAS = 2.5 // ROAS médio atual do mercado
      const improvedROAS = 4.2 // ROAS com Scala Uai
      
      const currentRevenue = spend * currentROAS
      const projectedRevenue = spend * improvedROAS
      const additionalRevenue = projectedRevenue - currentRevenue
      const yearlyGain = additionalRevenue * 12

      setResults({
        currentRevenue,
        projectedRevenue,
        additionalRevenue,
        yearlyGain,
        roasImprovement: ((improvedROAS - currentROAS) / currentROAS * 100).toFixed(0)
      })
    }
  }

  const resetCalculator = () => {
    setMonthlyRevenue('')
    setAdSpend('')
    setResults(null)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="calculadora">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Calcule o Potencial do Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Descubra quanto você pode faturar a mais com nossa metodologia
          </p>
        </div>

        <Card className="shadow-card-hover dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <Calculator className="mr-3 h-6 w-6 text-primary" />
              Calculadora de ROI
            </CardTitle>
            <CardDescription className="dark:text-gray-300">
              Insira seus dados atuais e veja a projeção de crescimento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="revenue" className="dark:text-white">Faturamento Mensal Atual (R$)</Label>
                <Input
                  id="revenue"
                  type="number"
                  placeholder="Ex: 50000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  className="text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="adspend" className="dark:text-white">Investimento Mensal em Ads (R$)</Label>
                <Input
                  id="adspend"
                  type="number"
                  placeholder="Ex: 10000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(e.target.value)}
                  className="text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={calculateROI} 
                className="btn-accent flex-1 text-lg py-3"
                disabled={!monthlyRevenue || !adSpend}
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Calcular Potencial de Crescimento
              </Button>
              
              {results && (
                <Button 
                  onClick={resetCalculator}
                  variant="outline"
                  className="px-6 py-3 dark:border-gray-600 dark:text-gray-300"
                >
                  Limpar
                </Button>
              )}
            </div>

            {results && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg border dark:border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-center dark:text-white">
                  🚀 Seu Potencial de Crescimento
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      R$ {results.additionalRevenue.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Receita adicional/mês</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-accent">
                      R$ {results.yearlyGain.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Ganho anual projetado</div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    +{results.roasImprovement}% de melhoria no ROAS
                  </Badge>
                </div>
                <div className="text-center mt-4">
                  <Button 
                    className="btn-accent"
                    onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Quero Esses Resultados!
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Componente Solutions
const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Gestão de Tráfego",
      description: "Google Ads, Facebook Ads, Instagram e TikTok com automação inteligente",
      features: ["Otimização automática", "Relatórios em tempo real", "Segmentação avançada"],
      color: "border-primary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automação de Vendas",
      description: "CRM integrado com funis de conversão otimizados para PMEs",
      features: ["Lead scoring automático", "Nutrição personalizada", "Follow-up inteligente"],
      color: "border-accent"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Avançado",
      description: "Dashboard completo com métricas que realmente importam",
      features: ["ROI em tempo real", "Análise de concorrentes", "Previsões de crescimento"],
      color: "border-destructive"
    }
  ]

  return (
    <section className="py-20 dark:bg-gray-800 transition-colors duration-300" id="solucoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">🎯 Nossas Soluções</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Transforme Seu Marketing em{' '}
            <span className="text-primary">Apenas 3 Passos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa metodologia comprovada para escalar PMEs através de tráfego pago inteligente
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className={`shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 ${solution.color} dark:bg-gray-700 dark:border-gray-600`}>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-600 text-primary mr-4">
                    {solution.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-300 dark:text-gray-500">
                    0{index + 1}
                  </div>
                </div>
                <CardTitle className="text-xl dark:text-white">{solution.title}</CardTitle>
                <CardDescription className="text-base dark:text-gray-300">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Pricing
const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      name: "Starter",
      price: "197",
      description: "Ideal para empresas que faturam até R$ 100k/mês",
      features: [
        "1 plataforma de anúncios",
        "Dashboard básico",
        "Relatórios semanais",
        "Suporte via chat",
        "Taxa de gestão: 8%"
      ],
      popular: false,
      cta: "Começar Agora"
    },
    {
      name: "Business",
      price: "297",
      description: "Ideal para empresas que faturam até R$ 500k/mês",
      features: [
        "2 plataformas de anúncios",
        "Dashboard avançado",
        "Relatórios personalizados",
        "Reunião mensal",
        "Taxa de gestão: 8%"
      ],
      popular: true,
      cta: "Mais Popular"
    },
    {
      name: "Premium",
      price: "397",
      description: "Ideal para empresas que faturam acima de R$ 500k/mês",
      features: [
        "3+ plataformas de anúncios",
        "Dashboard executivo",
        "Consultoria estratégica",
        "Reunião quinzenal",
        "Taxa de gestão: 8%"
      ],
      popular: false,
      cta: "Começar Agora"
    }
  ]

  const handlePlanSelect = (planIndex) => {
    setSelectedPlan(planIndex)
    // Simular redirecionamento para checkout
    setTimeout(() => {
      alert(`Redirecionando para checkout do plano ${plans[planIndex].name}...`)
      setSelectedPlan(null)
    }, 1000)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="precos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">💰 Planos e Preços</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Escolha o Plano Ideal para Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transparência total, sem surpresas. Cancele quando quiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`shadow-card hover:shadow-card-hover transition-all duration-300 relative dark:bg-gray-800 dark:border-gray-700 ${plan.popular ? 'border-primary border-2' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl dark:text-white">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold dark:text-white">12x de R$ {plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/ano</span>
                </div>
                <CardDescription className="mt-2 dark:text-gray-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-3" />
                      <span className="text-sm dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-accent' : 'btn-primary'} ${selectedPlan === index ? 'opacity-50' : ''}`}
                  size="lg"
                  onClick={() => handlePlanSelect(index)}
                  disabled={selectedPlan === index}
                >
                  {selectedPlan === index ? 'Processando...' : plan.cta}
                  {selectedPlan !== index && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            💡 Todos os planos incluem garantia de 30 dias ou seu dinheiro de volta
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="dark:border-gray-600 dark:text-gray-300"
            onClick={() => alert('Entre em contato via WhatsApp: (11) 99999-9999')}
          >
            Precisa de algo personalizado? Fale conosco
          </Button>
        </div>
      </div>
    </section>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              Scala <span className="text-accent">Uai</span>
            </div>
            <p className="text-gray-400 mb-4">
              A agência de tráfego pago que escala PMEs brasileiras com automação inteligente.
            </p>
            <div className="flex space-x-4">
              <Badge variant="outline" className="text-white border-white">
                CNPJ: 00.000.000/0001-00
              </Badge>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors text-left">Google Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">Facebook Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">Instagram Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">TikTok Ads</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors text-left">Sobre Nós</button></li>
              <li><button className="hover:text-white transition-colors text-left">Cases de Sucesso</button></li>
              <li><button className="hover:text-white transition-colors text-left">Carreiras</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 contato@scalauai.com.br</li>
              <li>📱 (11) 99999-9999</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Scala Uai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <HeroSection />
      <ROICalculator />
      <SolutionsSection />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default App

