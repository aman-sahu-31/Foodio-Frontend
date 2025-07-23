import React from 'react';
import { FaCreditCard, FaTruck, FaCalendarAlt, FaUserPlus, FaUsers } from 'react-icons/fa';
import offers from '../Pages/Json-File/SpecialOffers'

const iconMap = {
  'credit-card': <FaCreditCard size={30} />,
  'truck': <FaTruck size={30} />,
  'calendar': <FaCalendarAlt size={30} />,
  'user-plus': <FaUserPlus size={30} />,
  'users': <FaUsers size={30} />
};

function SpecialOffersSection() {
  return (
    <section className="py-10 px-4 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">🔥 Special Offers Just for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`bg-gradient-to-r ${offer.bgColor} text-white p-6 rounded-2xl shadow-lg flex items-start space-x-4 hover:scale-105 transition-transform duration-300`}
          >
            <div>{iconMap[offer.icon]}</div>
            <div>
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <p className="text-sm mt-1">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialOffersSection;
