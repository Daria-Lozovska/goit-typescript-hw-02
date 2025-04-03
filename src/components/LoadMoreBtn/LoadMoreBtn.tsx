import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => (
  <button className={styles.button} onClick={onLoadMore}>Load More</button>
);

export default LoadMoreBtn;



