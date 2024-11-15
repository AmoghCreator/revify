'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carsData = [
  { id: 1, title: 'Tesla Model S', description: 'Electric car', imageUrl: '/car1.jpg' },
  { id: 2, title: 'Ford Mustang', description: 'Muscle car', imageUrl: '/car2.jpg' },
  { id: 3, title: 'Porsche 911', description: 'Luxury sports car', imageUrl: '/car3.jpg' },
  { id: 4, title: 'Chevrolet Camaro', description: 'Sports car', imageUrl: '/car4.jpg' },
  { id: 5, title: 'Audi R8', description: 'Luxury sports car', imageUrl: '/car5.jpg' },
  { id: 6, title: 'BMW i8', description: 'Hybrid sports car', imageUrl: '/car6.jpg' },
  { id: 7, title: 'Ferrari 488', description: 'Supercar', imageUrl: '/car7.jpg' },
  { id: 8, title: 'Lamborghini Huracan', description: 'Supercar', imageUrl: '/car8.jpg' },
  { id: 9, title: 'Mercedes AMG GT', description: 'Luxury sports car', imageUrl: '/car9.jpg' },
];

const ListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState(carsData);

  // Filter cars based on search term
  useEffect(() => {
    const filtered = carsData.filter((car) =>
      [car.title, car.description].join(' ').toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center w-full h-full px-4 py-8">
      {/* Animated Search Bar */}
      <motion.div
        className="sticky top-[15vh] z-20 w-full max-w-2xl mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
      >
        <motion.input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white backdrop-blur-md bg-opacity-50 focus:outline-none focus:border-blue-500 transition-all"
          whileHover={{ scale: 1.02 }}
          whileFocus={{ scale: 1.05, borderColor: '#3b82f6' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        />
      </motion.div>

      {/* Scrollable List */}
      <div className="relative flex flex-wrap gap-8 justify-center h-[80vh] top-[10vh] overflow-y-auto px-4 pb-14">
        <AnimatePresence>
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                className="p-6 rounded-lg shadow-lg backdrop-blur-lg bg-gray-900 bg-opacity-70 transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col w-full sm:w-1/2 lg:w-[30vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Car Image */}
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={car.imageUrl}
                    alt={car.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-white">{car.title}</h2>
                <p className="text-gray-400">{car.description}</p>
                <div className="flex mt-4 space-x-4">
                  <button className="text-blue-400 hover:underline">Edit</button>
                  <button className="text-red-400 hover:underline">Delete</button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-gray-500 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No cars found
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ListPage;
