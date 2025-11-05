import React from 'react';
import { Phone, Mail, MapPin, DollarSign, ShieldCheck } from 'lucide-react';

const ContactFinancing = ({ section = 'contact' }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {section === 'contact' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Contact</h2>
            <p className="text-gray-600 mb-6">Suntem în Podoleni, Neamț. Răspundem rapid la telefon și e-mail.</p>

            <div className="space-y-4">
              <a href="tel:+40700111222" className="flex items-center gap-3 p-4 rounded-lg border bg-white hover:bg-blue-50">
                <Phone className="text-blue-700" size={18} />
                <div>
                  <div className="font-semibold">+40 700 111 222</div>
                  <div className="text-sm text-gray-500">Luni - Vineri: 09:00 - 18:00</div>
                </div>
              </a>
              <a href="mailto:contact@masini-podoleni.ro" className="flex items-center gap-3 p-4 rounded-lg border bg-white hover:bg-blue-50">
                <Mail className="text-blue-700" size={18} />
                <div>
                  <div className="font-semibold">contact@masini-podoleni.ro</div>
                  <div className="text-sm text-gray-500">Răspundem în aceeași zi</div>
                </div>
              </a>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-white">
                <MapPin className="text-blue-700" size={18} />
                <div>
                  <div className="font-semibold">Str. Principală 12, Podoleni, Neamț</div>
                  <div className="text-sm text-gray-500">Parcul auto este semnalizat la intrarea în localitate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border bg-white">
            <iframe
              title="Harta Podoleni"
              src="https://www.google.com/maps?q=Podoleni%2C%20Neamt&output=embed"
              className="w-full h-[350px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Finanțare</h2>
            <p className="text-gray-600 mb-6">Oferim soluții de finanțare flexibile prin parteneri de încredere.</p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><ShieldCheck className="text-green-600" size={18}/> Rată fixă pe toată perioada</li>
              <li className="flex items-start gap-2"><ShieldCheck className="text-green-600" size={18}/> Avans de la 0% pentru clienți eligibili</li>
              <li className="flex items-start gap-2"><ShieldCheck className="text-green-600" size={18}/> Aprobare rapidă în 24-48h</li>
              <li className="flex items-start gap-2"><ShieldCheck className="text-green-600" size={18}/> Persoane fizice și juridice</li>
            </ul>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 p-4 border rounded-lg bg-white">
              <h3 className="font-semibold mb-3">Calculează o ofertă orientativă</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Valoare mașină (EUR)</label>
                  <input type="number" defaultValue={10000} min={1000} step={500} className="mt-1 w-full border rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Avans (%)</label>
                  <input type="number" defaultValue={20} min={0} max={90} className="mt-1 w-full border rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Perioadă (luni)</label>
                  <input type="number" defaultValue={60} min={12} max={84} className="mt-1 w-full border rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Dobândă anuală (%)</label>
                  <input type="number" defaultValue={9.5} min={1} max={20} step={0.1} className="mt-1 w-full border rounded-md px-3 py-2" />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md"><DollarSign size={18}/> Calculează</button>
            </form>
          </div>

          <div className="rounded-xl overflow-hidden border bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="text-6xl font-extrabold text-blue-700">de la 0% avans</div>
            <p className="text-gray-600 mt-2">În funcție de profilul clientului și vehicul.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-white">
                <div className="text-sm text-gray-500">Exemplu</div>
                <div className="text-2xl font-bold">10.000 €</div>
                <div className="text-sm text-gray-500">60 luni • 9.5% dobândă</div>
              </div>
              <div className="p-4 rounded-lg border bg-white">
                <div className="text-sm text-gray-500">Rată estimată</div>
                <div className="text-2xl font-bold">aprox. 210 €/lună</div>
                <div className="text-xs text-gray-500">Orientativ, fără comisioane incluse</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactFinancing;
