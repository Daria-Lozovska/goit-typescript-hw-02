import styles from "./LoadMoreBtn.module.css";

interface Props {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onLoadMore }) => (
  <button className={styles.button} onClick={onLoadMore}>
    Load More
  </button>
);

export default LoadMoreBtn;
