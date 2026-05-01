export const fetchTiles = async () => {
  try {
    const res = await fetch("https://tiles-gallery-six.vercel.app/data.json");

    if (!res.ok) {
      throw new Error("Failed to fetch tiles");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching tiles:", error);
    return [];
  }
};
// fetch single tile by id
export const fetchTileById = async (id) => {
  try {
    const res = await fetch("https://tiles-gallery-six.vercel.app/data.json");

    if (!res.ok) {
      throw new Error("Failed to fetch tiles");
    }

    const data = await res.json();
    const tiles = data.tiles || data;

    return tiles.find((item) => item.id === id) || null;
  } catch (error) {
    console.error("Error fetching tile:", error);
    return null;
  }
};