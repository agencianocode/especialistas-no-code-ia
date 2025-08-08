import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-black mb-4">
        Página de Prueba
      </h1>
      <p className="text-lg text-gray-600">
        Si puedes ver esto, el servidor está funcionando correctamente.
      </p>
      <div className="mt-8 p-4 bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Estado del Sistema
        </h2>
        <ul className="text-blue-700 space-y-1">
          <li>✅ React funcionando</li>
          <li>✅ Tailwind CSS funcionando</li>
          <li>✅ Servidor ejecutándose</li>
        </ul>
      </div>
    </div>
  );
}
