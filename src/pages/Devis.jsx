import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, CheckCircle } from 'lucide-react';

const Devis = () => {
  const [selectedServices, setSelectedServices] = useState({});
  const [surface, setSurface] = useState('');

  const services = [
    { id: 'terrasse', name: 'Terrasse', price: 10 },
    { id: 'facade', name: 'Façade', price: 13 },
    { id: 'toiture', name: 'Toiture', price: 20 },
    { id: 'hydrofuge', name: 'Traitement Hydrofuge', price: 10 },
    { id: 'demoussage', name: 'Démoussage Toiture', price: 25 },
    { id: 'chantier', name: 'Nettoyage Chantier', price: 5 }
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const calculateTotal = () => {
    if (!surface || surface <= 0) return 0;
    
    const selectedServicesList = Object.keys(selectedServices).filter(
      serviceId => selectedServices[serviceId]
    );
    
    const total = selectedServicesList.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return sum + (service.price * surface);
    }, 0);
    
    return total;
  };

  const total = calculateTotal();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Calculator className="w-5 h-5 text-secondary mr-2" />
            <span className="text-primary font-semibold">Simulateur de Devis</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Devis Gratuit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculez instantanément le coût de vos prestations de nettoyage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="space-y-8">
            {/* Surface */}
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-6">Surface à nettoyer</h3>
              <div className="space-y-4">
                <label className="block text-gray-700 font-medium">
                  Surface en m²
                </label>
                <input
                  type="number"
                  value={surface}
                  onChange={(e) => setSurface(e.target.value)}
                  placeholder="Ex: 100"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors"
                  min="1"
                />
              </div>
            </div>

            {/* Services */}
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-6">Services souhaités</h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-secondary transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices[service.id] || false}
                      onChange={() => handleServiceToggle(service.id)}
                      className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                    />
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-primary">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.price}€/m²</div>
                    </div>
                    {selectedServices[service.id] && (
                      <CheckCircle className="w-5 h-5 text-secondary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Résultat */}
          <div className="space-y-8">
            <div className="card bg-gradient-to-br from-primary to-secondary text-white">
              <h3 className="text-2xl font-bold mb-6">Estimation du devis</h3>
              
              {surface && surface > 0 ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      {total.toFixed(2)}€
                    </div>
                    <div className="text-lg opacity-90">
                      pour {surface}m²
                    </div>
                  </div>

                  {Object.keys(selectedServices).filter(id => selectedServices[id]).length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold">Détail des prestations :</h4>
                      {Object.keys(selectedServices)
                        .filter(serviceId => selectedServices[serviceId])
                        .map(serviceId => {
                          const service = services.find(s => s.id === serviceId);
                          const serviceTotal = service.price * surface;
                          return (
                            <div key={serviceId} className="flex justify-between items-center py-2 border-b border-white/20">
                              <span>{service.name}</span>
                              <span className="font-semibold">{serviceTotal.toFixed(2)}€</span>
                            </div>
                          );
                        })}
                    </div>
                  )}

                  <div className="pt-6">
                    <Link 
                      to="/formulaire" 
                      className="w-full bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 block text-center"
                    >
                      Demander un Devis Détaillé
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-2xl font-bold mb-2">0€</div>
                  <div className="text-lg opacity-90">
                    Entrez une surface et sélectionnez des services
                  </div>
                </div>
              )}
            </div>

            {/* Informations */}
            <div className="card">
              <h3 className="text-xl font-bold text-primary mb-4">Informations importantes</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Devis gratuit et sans engagement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Intervention sous 24h</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Garantie satisfaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Paiement sécurisé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devis;
