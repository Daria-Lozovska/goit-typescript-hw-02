import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface Image {
  urls: { regular: string };
  alt_description: string;
  user: { name: string };
  likes: number;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
      className={styles.modal} 
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.button}>Close</button>
      <img src={image.urls.regular} alt={image.alt_description} className={styles.img} />
      <p className={styles.author}>Author: {image.user.name}</p>
      <p className={styles.likes}>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;

