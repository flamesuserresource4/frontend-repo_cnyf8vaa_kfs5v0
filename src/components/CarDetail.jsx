import React from 'react';
import { ArrowLeft, Calendar, Gauge, Car, Droplet, Settings, DollarSign, BadgeCheck } from 'lucide-react';

const formatPrice = (num) => new Intl.NumberFormat('ro-RO', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);

const CarDetail = ({ car, onBack, onContact }) => {
  if (!car) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-blue-700 hover:underline mb-4">
        <ArrowLeft size={18} /> Înapoi la listă
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
          <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover" />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">{car.make} {car.model}</h1>
          <p className="text-gray-600">{car.year} • {car.engine} • {car.transmission}</p>

          <div className="mt-4 text-3xl font-extrabold text-blue-700">{formatPrice(car.price)}</div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-white flex items-center gap-3"><Calendar size={18}/> An fabricație: <span className="font-semibold ml-auto">{car.year}</span></div>
            <div className="p-4 rounded-lg border bg-white flex items-center gap-3"><Gauge size={18}/> Kilometraj: <span className="font-semibold ml-auto">{car.km.toLocaleString('ro-RO')} km</span></div>
            <div className="p-4 rounded-lg border bg-white flex items-center gap-3"><Car size={18}/> Caroserie: <span className="font-semibold ml-auto">{car.body}</span></div>
            <div className="p-4 rounded-lg border bg-white flex items-center gap-3"><Droplet size={18}/> Combustibil: <span className="font-semibold ml-auto">{car.fuel}</span></div>
            <div className="p-4 rounded-lg border bg-white flex items-center gap-3"><Settings size={18}/> Transmisie: <span className="font-semibold ml-auto">{car.transmission}</span></div>
            <div className="p-4 rounded-lg border bg-white flex items-center gap-3"><BadgeCheck size={18}/> Istoric: <span className="font-semibold ml-auto">{car.history}</span></div>
          </div>

          <div className="mt-6 space-y-3 text-gray-700">
            <h3 className="font-semibold">Descriere</h3>
            <p>{car.description}</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={onContact} className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition-colors">
              <DollarSign size={18} /> Cere ofertă de finanțare
            </button>
            <a href="tel:+40700111222" className="inline-flex justify-center items-center gap-2 border border-blue-600 text-blue-700 px-5 py-3 rounded-md hover:bg-blue-50">
              Sună acum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetail;
