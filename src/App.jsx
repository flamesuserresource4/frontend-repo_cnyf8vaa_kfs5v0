import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import CarGrid from './components/CarGrid.jsx';
import CarDetail from './components/CarDetail.jsx';
import ContactFinancing from './components/ContactFinancing.jsx';
import { Car } from 'lucide-react';

const carsData = [
  {
    id: '1',
    make: 'Volkswagen',
    model: 'Golf VII',
    year: 2018,
    engine: '1.6 TDI 115CP',
    transmission: 'Manuală',
    price: 11990,
    km: 118000,
    body: 'Hatchback',
    fuel: 'Diesel',
    history: 'Service complet la reprezentanță',
    image: 'https://images.unsplash.com/photo-1551345650-96adc652c669?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVbiUyMEdvbGYlMjAlQzMlQUVuZ3Jpaml0JTJDJTIwdW5pY3xlbnwwfDB8fHwxNzYyMzU0MDg2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Un Golf îngrijit, unic proprietar, fără accidente, consum redus și întreținere ieftină.'
  },
  {
    id: '2',
    make: 'BMW',
    model: '320d xDrive',
    year: 2017,
    engine: '2.0d 190CP',
    transmission: 'Automată',
    price: 16990,
    km: 156000,
    body: 'Sedan',
    fuel: 'Diesel',
    history: 'Istoric verificat, carte service',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop',
    description: 'Tracțiune integrală, pachet M, stare tehnică foarte bună, gata de drum.'
  },
  {
    id: '3',
    make: 'Dacia',
    model: 'Duster 4x4',
    year: 2020,
    engine: '1.3 TCe 150CP',
    transmission: 'Manuală',
    price: 15490,
    km: 62000,
    body: 'SUV',
    fuel: 'Benzină',
    history: 'Revizii la zi',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1600&auto=format&fit=crop',
    description: '4x4 cu reductor, ideal pentru drumuri grele, spațios și economic pentru segment.'
  },
  {
    id: '4',
    make: 'Mercedes-Benz',
    model: 'E220d',
    year: 2016,
    engine: '2.0d 194CP',
    transmission: 'Automată',
    price: 18990,
    km: 175000,
    body: 'Sedan',
    fuel: 'Diesel',
    history: 'Verificare tehnică completă',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop',
    description: 'Confort premium, pachet de dotări bogat, ideal pentru business și familie.'
  }
];

function App() {
  const [page, setPage] = useState('acasa');
  const [selectedCar, setSelectedCar] = useState(null);

  const featured = useMemo(() => carsData.slice(0, 3), []);

  const handleNavigate = (key) => {
    setPage(key);
    if (key !== 'detalii') setSelectedCar(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewCar = (car) => {
    setSelectedCar(car);
    setPage('detalii');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Navbar current={page} onNavigate={handleNavigate} />

      {page === 'acasa' && (
        <main>
          <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                    <Car size={16}/> Dealer auto rulate • Podoleni, Neamț
                  </div>
                  <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                    Mașina ta, verificată și pregătită de drum
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Selectăm atent autoturisme cu istoric clar, verificare tehnică și posibilitate de finanțare.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button onClick={() => handleNavigate('masini')} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Vezi mașinile</button>
                    <button onClick={() => handleNavigate('finantare')} className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50">Finanțare</button>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border bg-white shadow-sm">
                  <img src="https://images.unsplash.com/photo-1582840932879-05b578713d6c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXJjJTIwYXV0b3xlbnwwfDB8fHwxNzYyMzU0MDg1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Parc auto" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <CarGrid cars={featured} onView={handleViewCar} />
        </main>
      )}

      {page === 'masini' && <CarGrid cars={carsData} onView={handleViewCar} />}
      {page === 'detalii' && (
        <CarDetail car={selectedCar} onBack={() => handleNavigate('masini')} onContact={() => handleNavigate('finantare')} />
      )}
      {page === 'contact' && <ContactFinancing section="contact" />}
      {page === 'finantare' && <ContactFinancing section="finantare" />}

      <footer className="border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Masini Rulate Podoleni. Toate drepturile rezervate.</p>
          <p>Podoleni, Neamț • +40 700 111 222 • contact@masini-podoleni.ro</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
