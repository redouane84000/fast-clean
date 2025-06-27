import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
    // Ici vous pourriez ajouter l'envoi réel du formulaire
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="card">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-primary mb-4">
              Message Envoyé !
            </h1>
            <p className="text-gray-600 mb-8">
              Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
            </p>
            <Link 
              to="/" 
              className="btn-primary"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prenez rendez-vous ou demandez un devis personnalisé
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="card">
            <h2 className="text-2xl font-bold text-primary mb-6">Formulaire de contact</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet, vos besoins, ou posez vos questions..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full group"
              >
                <span className="flex items-center justify-center">
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-primary mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">FC</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">FAST & CLEAN</h3>
                    <p className="text-gray-600">Nettoyage Haute Pression</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-3">📞</span>
                    <span>0752887535</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-3">✉️</span>
                    <span>fastand-clean@hotmail.com</span>
                  </div>
                  
                  <div className="flex items-start text-gray-600">
                    <span className="w-5 h-5 mr-3 mt-0.5">📍</span>
                    <span>43 Impasse des Alouettes<br />84130 Le Pontet</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-3">🏢</span>
                    <span>SIREN : 941 130 072</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-primary mb-4">Pourquoi nous choisir ?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Intervention rapide sous 24h</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Équipements professionnels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Personnel qualifié et expérimenté</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Garantie satisfaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Devis gratuit et sans engagement</span>
                </li>
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-primary to-secondary text-white">
              <h3 className="text-xl font-bold mb-4">Urgence ?</h3>
              <p className="mb-4 opacity-90">
                Pour une intervention urgente, appelez-nous directement :
              </p>
              <div className="text-2xl font-bold">
                0752887535
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
