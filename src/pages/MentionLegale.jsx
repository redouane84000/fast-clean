import React from 'react';

const MentionLegale = () => (
  <div className="min-h-screen bg-off-white px-4 py-8">
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-mobile mx-auto">
      <h1 className="text-2xl font-bold text-deep-blue mb-4">Mentions légales</h1>
      <ul className="text-gray-700 text-sm space-y-2">
        <li><strong>Dénomination :</strong> FAST & CLEAN</li>
        <li><strong>Adresse :</strong> 43 impasse des alouettes, 84130 Le Pontet</li>
        <li><strong>SIREN :</strong> 941 130 072</li>
        <li><strong>Email :</strong> fastand-clean@hotmail.com</li>
        <li><strong>Téléphone :</strong> 0782197182</li>
      </ul>
      <p className="text-xs text-gray-400 mt-6">Ce site est la propriété de FAST & CLEAN. Toute reproduction, même partielle, est interdite sans autorisation.</p>
    </div>
  </div>
);

export default MentionLegale;
