import { Image } from "../types/index";

const API_KEY = "Gd4hAjZGY4iB_bM6T4t-GkWy6P1FguQKr-0JqonIA6k";

export const fetchImages = async (
  query: string,
  page: number
): Promise<Image[]> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${API_KEY}`
  );

  if (!response.ok) throw new Error("Failed to fetch images");

  const data = await response.json();
  return data.results;
};
