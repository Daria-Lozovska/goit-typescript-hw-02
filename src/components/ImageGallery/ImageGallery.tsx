import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Image {
  id: string;
  urls: { small: string };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (!images.length) return null;

  return (
    <ul className={styles.list}>
      {images.map((image) => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

