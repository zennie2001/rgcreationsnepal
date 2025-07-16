"use client";

import React, { useState } from 'react';
import { AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineClose } from 'react-icons/ai';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

const FurnitureImage: React.FC = () => {
  const images: GalleryImage[] = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/furniture/f${i + 1}.jpg`,
    alt: `Furniture image ${i + 1}`,
  }));

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setZoom(1);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Furniture Gallery
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-full overflow-hidden rounded shadow cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </button>

            <div className="flex justify-center mb-4 space-x-4">
              <button
                onClick={handleZoomOut}
                className="text-white text-3xl hover:text-gray-300"
              >
                <AiOutlineZoomOut />
              </button>
              <button
                onClick={handleZoomIn}
                className="text-white text-3xl hover:text-gray-300"
              >
                <AiOutlineZoomIn />
              </button>
            </div>

            <div className="overflow-auto max-h-[80vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  transform: `scale(${zoom})`,
                  transition: 'transform 0.3s ease',
                }}
                className="mx-auto max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FurnitureImage;
