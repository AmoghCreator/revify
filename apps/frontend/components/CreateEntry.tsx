'use client';
import React, { useState } from 'react';

const CreateProductPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages(fileArray);

      // Generate preview URLs
      const urls = fileArray.map(file => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !description || images.length === 0) {
      alert('Please fill out all fields and upload at least one image.');
      return;
    }

    // Handle form submission logic (e.g., API call)
    console.log({ title, description, tags, images });

    // Clear form after submission
    setTitle('');
    setDescription('');
    setTags('');
    setImages([]);
    setPreviewUrls([]);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Add a New Car</h2>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Car Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-white mb-2">Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Upload Images (up to 10)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="block w-full text-white"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {previewUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Preview"
                className="h-32 w-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;

