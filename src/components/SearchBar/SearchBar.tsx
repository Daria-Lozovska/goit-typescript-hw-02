import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter search term");
      return;
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

