import styles from "./ImageCard.module.css";

interface Image {
  id: string;
  urls: { small: string };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => (
  <div onClick={() => onClick(image)} className={styles.div}>
    <img src={image.urls.small} alt={image.alt_description} className={styles.img} />
  </div>
);

export default ImageCard;

