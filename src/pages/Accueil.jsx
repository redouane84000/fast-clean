import React from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import { 
  Sparkles, 
  Shield, 
  Clock, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Award,
  Users,
  Home,
  Building,
  Layers,
  Droplets,
  Leaf,
  Construction
} from 'lucide-react';

const Accueil = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Terrasse",
      description: "Nettoyage haute pression de terrasses en pierre, béton ou bois",
      price: "10€/m²",
      link: "/prestation/terrasse"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Façade",
      description: "Nettoyage professionnel de tous types de façades",
      price: "13€/m²",
      link: "/prestation/facade"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Toiture",
      description: "Nettoyage complet de toitures et chéneaux",
      price: "20€/m²",
      link: "/prestation/toiture"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Traitement Hydrofuge",
      description: "Protection durable contre l'humidité et les intempéries",
      price: "10€/m²",
      link: "/prestation/hydrofuge"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Démoussage Toiture",
      description: "Élimination complète de la mousse et des algues",
      price: "25€/m²",
      link: "/prestation/demoussage"
    },
    {
      icon: <Construction className="w-8 h-8" />,
      title: "Nettoyage Chantier",
      description: "Nettoyage post-travaux et remise en état",
      price: "5€/m²",
      link: "/prestation/chantier"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Satisfaits", icon: <Users className="w-6 h-6" /> },
    { number: "1500+", label: "Projets Réalisés", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "5", label: "Années d'Expérience", icon: <Award className="w-6 h-6" /> },
    { number: "24h", label: "Délai d'Intervention", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Particules en arrière-plan */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image à gauche */}
            <div className="lg:w-1/2 animate-fade-in-left delay-200">
              <div className="w-full max-w-md mx-auto hover-float">
                <img 
                  src="/image/generale.PNG" 
                  alt="Fast & Clean - Nettoyage professionnel" 
                  className="w-full h-auto rounded-3xl shadow-2xl hover-pulse"
                />
              </div>
            </div>

            {/* Contenu à droite */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="mb-8 animate-slide-in-top delay-100">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 mb-8 hover-pulse">
                  <Sparkles className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-primary font-semibold">Nettoyage Haute Pression</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-bounce-in delay-300">
                <span className="gradient-text">FAST & CLEAN</span>
                <br />
                <span className="text-primary">Excellence & Qualité</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-400">
                Votre partenaire de confiance pour tous vos besoins de nettoyage professionnel. 
                <span className="text-secondary font-semibold"> Qualité garantie, résultats exceptionnels.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16 animate-fade-in-up delay-500">
                <Link 
                  to="/devis" 
                  className="btn-primary group hover-shake"
                >
                  <span className="flex items-center">
                    Demander un Devis Gratuit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link 
                  to="/formulaire" 
                  className="btn-secondary group hover-pulse"
                >
                  <span className="flex items-center">
                    Prendre RDV
                    <Phone className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card text-center animate-zoom-in hover-float"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-secondary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 bg-white/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up delay-200">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes et professionnelles pour tous vos besoins de nettoyage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card group animate-fade-in-up hover-float"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 hover-pulse">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-secondary font-bold text-lg">
                    {service.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-br from-primary to-secondary text-white p-12 animate-bounce-in delay-100 hover-float">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Prêt à Transformer Votre Espace ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/devis" className="bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-shake">
                Devis Gratuit
              </Link>
              <div className="flex items-center justify-center space-x-4 hover-pulse">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">0782197182</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil; 