import { Image } from "../../types/index";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface Props {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => (
  <ul className={styles.list}>
    {images.map((image) => (
      <li key={image.id} className={styles.item}>
        <ImageCard image={image} onClick={onImageClick} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
