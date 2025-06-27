import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">FAST & CLEAN</h3>
              <p className="text-secondary/80 mb-4">
                Nettoyage Haute Pression Professionnel
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins de nettoyage professionnel. 
              Qualité garantie, résultats exceptionnels.
            </p>
          </div>

          {/* Coordonnées */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Coordonnées</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-secondary" />
                <span>0782197182</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-secondary" />
                <span>fastand-clean@hotmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-secondary flex-shrink-0" />
                <span>
                  43 Impasse des Alouettes<br />
                  84130 Le Pontet
                </span>
              </div>
              <div className="text-sm">
                SIREN : 941 130 072
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Accueil
              </Link>
              <Link 
                to="/devis" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Devis gratuit
              </Link>
              <Link 
                to="/formulaire" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/mentions-legales" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Suivez-nous</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <span className="text-lg font-bold">G</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 FAST & CLEAN. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/mentions-legales" 
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300 text-sm">
                SIRET : 941 130 072 00012
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 