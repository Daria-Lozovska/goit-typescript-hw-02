export interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  user: { name: string };
  likes: number;
}

export const fetchImages = async (query: string, page: number): Promise<Image[]> => {
  const API_KEY = "YOUR_API_KEY";
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();
  return data.results;
};
