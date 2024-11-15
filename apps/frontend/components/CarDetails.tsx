'use client';
import React from 'react';

const car = {
  id: 1,
  title: 'Tesla Model S',
  description: 'Electric car',
  tags: ['Electric', 'Luxury', 'Sedan'],
  images: ['/car1.jpg', '/car2.jpg'],
};

const ProductDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">{car.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {car.images.map((img, index) => (
          <img key={index} src={img} alt={car.title} className="rounded-lg object-cover" />
        ))}
      </div>
      <p className="text-gray-400 mb-4">{car.description}</p>
      <div className="flex space-x-2 mb-6">
        {car.tags.map((tag, index) => (
          <span key={index} className="bg-blue-600 text-white py-1 px-3 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-6 rounded">Edit</button>
        <button className="bg-red-500 text-white py-2 px-6 rounded">Delete</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

