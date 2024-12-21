import { useState, useEffect } from "react";
import ImageLoader from "../components/ImageLoader";

interface Image {
  id: number;
  src: string;
  alt: string;
  description: string;
}

const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setImages([
        { id: 1, src: "https://picsum.photos/800/600", alt: "Demo 1", description: "Epic shot #1" },
        { id: 2, src: "https://picsum.photos/801/600", alt: "Demo 2", description: "Epic shot #2" },
        { id: 3, src: "https://picsum.photos/802/600", alt: "Demo 3", description: "Epic shot #3" },
      ]);
      setLoading(false);
    };

    loadImages();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <h1 className="font-serif text-5xl font-semibold text-gray-900 tracking-tight">
        Image Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading ? (
          <>
            <ImageLoader />
            <ImageLoader />
            <ImageLoader />
          </>
        ) : (
          images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-lg font-medium text-gray-900">{image.description}</p>
            </div>
          ))
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-gray-900/95 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl animate-scale-in">
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" />
            <div className="p-6">
              <p className="font-serif text-2xl text-gray-900">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
