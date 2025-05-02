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
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <button onClick={onClose} className={styles.button}>Close</button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.img}
      />
      <div className={styles.info}>
        <p><strong>Author:</strong> {image.user.name}</p>
        <p><strong>Likes:</strong> ❤️ {image.likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
