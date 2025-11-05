import React from 'react';
import { Car, Gauge, Calendar, DollarSign } from 'lucide-react';

const formatPrice = (num) => new Intl.NumberFormat('ro-RO', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);

const CarCard = ({ car, onView }) => {
  return (
    <div className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{car.make} {car.model}</h3>
            <p className="text-sm text-gray-500">{car.year} • {car.engine} • {car.transmission}</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-700">{formatPrice(car.price)}</div>
            <p className="text-xs text-gray-500">TVA inclus</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1"><Calendar size={16} /> {car.year}</div>
          <div className="flex items-center gap-1"><Gauge size={16} /> {car.km.toLocaleString('ro-RO')} km</div>
          <div className="flex items-center gap-1"><Car size={16} /> {car.body}</div>
        </div>
        <button onClick={() => onView(car)} className="mt-4 w-full inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          <DollarSign size={18} /> Vezi detalii
        </button>
      </div>
    </div>
  );
};

const CarGrid = ({ cars, onView }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Mașini disponibile</h2>
          <p className="text-gray-600">Autoturisme verificate, istoric clar și garanție.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onView={onView} />
        ))}
      </div>
    </section>
  );
};

export default CarGrid;
