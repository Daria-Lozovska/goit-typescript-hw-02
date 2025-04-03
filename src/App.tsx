import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages, Image } from "./api/fetchImages";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetchImages(query, page)
      .then((newImages) => setImages((prev) => [...prev, ...newImages]))
      .catch(() => setError("Failed to fetch images"))
      .finally(() => setLoading(false));
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={() => setPage((p) => p + 1)} />}
      <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage} />
    </div>
  );
};

export default App;
