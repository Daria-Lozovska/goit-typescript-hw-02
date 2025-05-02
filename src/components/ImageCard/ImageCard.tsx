import styles from "./ImageCard.module.css";
import { Image } from "../../types/index";

interface Props {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<Props> = ({ image, onClick }) => (
  <div className={styles.card} onClick={() => onClick(image)}>
    <img src={image.urls.small} alt={image.alt_description} className={styles.img} />
  </div>
);

export default ImageCard;
