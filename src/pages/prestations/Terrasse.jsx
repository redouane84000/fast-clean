import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, CheckCircle, Phone } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';

const Terrasse = () => {
  const avantages = [
    "Nettoyage haute pression professionnel",
    "Élimination des taches tenaces",
    "Préservation des matériaux",
    "Résultat visible immédiatement",
    "Intervention rapide et efficace",
    "Garantie satisfaction"
  ];

  return (
    <div className="min-h-screen bg-background py-20 relative">
      {/* Particules en arrière-plan */}
      <ParticleBackground />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6 animate-fade-in-up delay-100"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 mb-6 animate-slide-in-top delay-200 hover-pulse">
            <Home className="w-5 h-5 text-secondary mr-2" />
            <span className="text-primary font-semibold">Nettoyage de Terrasse</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 animate-bounce-in delay-300">
            Nettoyage de Terrasse
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-400">
            Nettoyage haute pression de terrasses en pierre, béton ou bois
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image et description */}
          <div className="space-y-8">
            <div className="card animate-fade-in-left delay-500 hover-float">
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-6">
                <img 
                  src="/image/terasse.PNG" 
                  alt="Nettoyage de terrasse" 
                  className="w-full h-full object-cover hover-pulse"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-primary mb-4">
                Nettoyage Haute Pression
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre service de nettoyage de terrasse utilise des équipements haute pression 
                professionnels pour éliminer efficacement toutes les salissures, mousses et 
                taches tenaces de vos surfaces extérieures.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Adapté à tous types de matériaux : pierre naturelle, béton, carrelage, 
                bois traité. Nous garantissons un résultat impeccable sans endommager vos surfaces.
              </p>
            </div>

            {/* Avantages */}
            <div className="card animate-fade-in-left delay-600 hover-float">
              <h3 className="text-xl font-bold text-primary mb-6">Nos Avantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {avantages.map((avantage, index) => (
                  <div key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0 hover-pulse" />
                    <span className="text-gray-600">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tarifs et CTA */}
          <div className="space-y-8">
            <div className="card bg-gradient-to-br from-primary to-secondary text-white animate-fade-in-right delay-500 hover-float">
              <h3 className="text-2xl font-bold mb-6">Tarification</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">8€/m²</div>
                  <div className="text-lg opacity-90">
                    Tarif TTC
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Inclus dans le tarif :</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Diagnostic de l'état de la terrasse</li>
                    <li>• Nettoyage haute pression adapté</li>
                    <li>• Élimination des mousses et algues</li>
                    <li>• Rinçage et séchage</li>
                    <li>• Vérification du résultat</li>
                  </ul>
                </div>

                <div className="pt-6">
                  <Link 
                    to="/devis" 
                    className="w-full bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 block text-center hover-shake"
                  >
                    Demander un Devis
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact direct */}
            <div className="card animate-fade-in-right delay-600 hover-float">
              <h3 className="text-xl font-bold text-primary mb-4">Contact Direct</h3>
              <p className="text-gray-600 mb-6">
                Pour une intervention urgente ou un devis personnalisé, contactez-nous directement :
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 hover-pulse">
                  <Phone className="w-5 h-5 mr-3 text-secondary" />
                  <span className="font-semibold">0752887535</span>
                </div>
                
                <div className="flex items-center text-gray-600 hover-pulse">
                  <span className="w-5 h-5 mr-3">✉️</span>
                  <span>fastand-clean@hotmail.com</span>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  to="/formulaire" 
                  className="btn-primary w-full flex items-center justify-center hover-shake"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Prendre Rendez-vous
                </Link>
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="card animate-fade-in-right delay-700 hover-float">
              <h3 className="text-xl font-bold text-primary mb-4">Informations Importantes</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0 hover-pulse" />
                  <span>Intervention sous 24h</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0 hover-pulse" />
                  <span>Devis gratuit et sans engagement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0 hover-pulse" />
                  <span>Équipements professionnels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0 hover-pulse" />
                  <span>Garantie satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image supplémentaire - Placeholder */}
        <div className="mt-16 animate-zoom-in delay-800">
          <div className="w-full h-96 rounded-3xl overflow-hidden hover-float">
            <img 
              src="/image/nettoyage2.png" 
              alt="Nettoyage de terrasse - Image supplémentaire" 
              className="w-full h-full object-cover hover-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terrasse; 
